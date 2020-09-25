<?php

include '../../frontend/processor/config.php';

$data = json_decode(file_get_contents("php://input"));

$request_type = $data->request_type;

// Get active question records
if($request_type == 1){

    $stmt = $con->prepare("SELECT * FROM questions WHERE is_active = 1");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("question_id"=>$row['question_id'],"question"=>$row['question'],"type"=>$row['type'],"is_active"=>$row['is_active']); 
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
}


if($request_type == 2){

    $stmt = $con->prepare("SELECT * FROM `user_scores` INNER JOIN `users` WHERE users.id = user_scores.user_id");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("user_id"=>$row['user_id'],"user_earth"=>$row['user_earth'],"user_air"=>$row['user_air'],"user_water"=>$row['user_water'], "user_fire"=>$row['user_fire'],"group_id"=>$row['group_id'],"first_name"=>$row['first_name'],
            "last_name"=>$row['last_name'],"email"=>$row['email'],"created"=>$row['created']); 
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
}


if($request_type == 9){
    $stmt = $con->prepare("SELECT * FROM tbl_customer ORDER BY CustomerID DESC");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
        $data[] = $row;
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
/* $query = "SELECT * FROM tbl_customer ORDER BY CustomerID DESC";

$statement = $connect->prepare($query);

$statement->execute();

while($row = $statement->fetch(PDO::FETCH_ASSOC))
{
	$data[] = $row;
}

echo json_encode($data); */
}
// Insert record
if($request_type == 3){
    $user_name = $data->user_name; 
    $email = $data->email; 
    $first_name = $data->first_name;  
    $last_name = $data->last_name;   
    $group_id = $data->group_id;
    $acl = $data->acl;
    
    
    // Check answer to the question id already exists
    $stmt = $con->prepare("SELECT * FROM users WHERE email=?");
    $stmt->bind_param('s',$email);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $return_arr = array();
    if($result->num_rows == 0){
       // INSERT INTO `users` (`id`, `user_name`, `user_password`, `email`, `first_name`, `last_name`, `group_id`, `date_joined`, `is_active`, `acl`) VALUES (NULL, 'jay', '', 'jay@mail.com', 'jay', 'yo', '2', '2020-09-25 15:07:19', '1', '2');
        // Insert
        //INSERT INTO `answers` (`id`, `user_id`, `question_id`, `choice_id`, `group_id`, `time_answered`) VALUES (NULL, '12', '16', '1234', '1', current_timestamp());
        $insertSQL = "INSERT INTO users (user_name, email, first_name, last_name, group_id, acl) VALUES (?,?, ?, ?,?,?)";
        $stmt = $con->prepare($insertSQL);
        $stmt->bind_param("ssssss",$user_name,$email,$first_name,$last_name,$group_id,$acl);
        $stmt->execute();

        $lastinsert_id = $stmt->insert_id;
        if($lastinsert_id > 0){
            $return_arr[] = array("id"=>$lastinsert_id,"user_name"=>$user_name,"email"=>$email,"first_name"=>$first_name,"last_name"=>$last_name,"group_id"=>$group_id, "acl"=>$acl);
        }
        $stmt->close();
        /*$insertSQL = "INSERT INTO users(fname,lname,username ) values(?,?,?)";
        $stmt = $con->prepare($insertSQL);
        $stmt->bind_param("sss",$fname,$lname,$username);
        $stmt->execute();

        $lastinsert_id = $stmt->insert_id;
        if($lastinsert_id > 0){
            $return_arr[] = array("id"=>$lastinsert_id,"fname"=>$fname,"lname"=>$lname,"username"=>$username);
        }
        $stmt->close();*/
    }
    
    echo json_encode($return_arr);
    exit;
}

// Delete record
if($request_type == 10){
    $question_id = $data->question_id;

    // Check userid exists
    $stmt = $con->prepare("SELECT * FROM answers WHERE id=?");
    $stmt->bind_param('i',$id);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    
    if($result->num_rows > 0){

        // Delete
        $deleteSQL = "DELETE FROM answers WHERE id=?";
        $stmt = $con->prepare($deleteSQL);
        $stmt->bind_param("i",$id);
        $stmt->execute();
        $stmt->close();

        echo 1;
        exit;
    }else{
        echo 0;
    }

    exit;
}

// Get user answer record
if($request_type == 4){
    $user_id = $data->user_id;
    $stmt = $con->prepare("SELECT * FROM answers WHERE user_id = ? ORDER BY CAST(question_id AS unsigned)");
    $stmt->bind_param('i',$user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("id"=>$row['id'],"user_id"=>$row['user_id'],"question_id"=>$row['question_id'],"choice_id"=>$row['choice_id']); 
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
}



// Get user record
if($request_type == 5){
    $email = $data->email;
    
   // $email = 'jraymund.niconi@gmail.com';
 
    $stmt = $con->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("id"=>$row['id'],"first_name"=>$row['first_name'],"email"=>$row['email'], "group_id"=>$row['group_id']); 
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
}

if($request_type == 6){

    $stmt = $con->prepare("SELECT * FROM users");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("id"=>$row['id'],"first_name"=>$row['first_name'],"last_name"=>$row['last_name'],"user_name"=>$row['user_name'],"email"=>$row['email'],"group_id"=>$row['group_id']); 
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
}



// Delete record
if($request_type == 7){
    $user_id = $data->user_id;

    // Check userid exists
    $stmt = $con->prepare("SELECT * FROM answers WHERE user_id=?");
    $stmt->bind_param('i',$user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    
    if($result->num_rows > 0){

        // Delete
        $deleteSQL = "DELETE FROM answers WHERE user_id=?";
        $stmt = $con->prepare($deleteSQL);
        $stmt->bind_param('i',$user_id);
        $stmt->execute();
        $stmt->close();

        echo 1;
        exit;
    }else{
        echo 0;
    }

    exit;
}