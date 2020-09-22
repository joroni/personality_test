<?php

include 'config.php';

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

// Insert record
if($request_type == 2){
    $user_id = $data->user_id;
    $question_id = $data->question_id;
    $choice_id = $data->choice_id;
    
    
    // Check answer to the question id already exists
    $stmt = $con->prepare("SELECT * FROM answers WHERE user_id=? AND question_id=?");
    $stmt->bind_param('ss',$user_id, $question_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $return_arr = array();
    if($result->num_rows == 0){

        // Insert
        
        $insertSQL = "INSERT INTO answers (user_id, question_id, choice_id) VALUES (?, ?, ?)";
        $stmt = $con->prepare($insertSQL);
        $stmt->bind_param("sss",$user_id,$question_id,$choice_id);
        $stmt->execute();

        $lastinsert_id = $stmt->insert_id;
        if($lastinsert_id > 0){
            $return_arr[] = array("id"=>$lastinsert_id,"user_id"=>$user_id,"question_id"=>$question_id,"choice_id"=>$choice_id);
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
if($request_type == 3){
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
 
    $stmt = $con->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("i", $email,
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("id"=>$row['id'],"first_name"=>$row['first_name'],"email"=>$row['email']); 
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
            $data[] = array("id"=>$row['id'],"fname"=>$row['fname'],"lname"=>$row['lname'],"user_name"=>$row['use_rname'],"email"=>$row['email']); 
        }
    }
    
    $stmt->close();
    echo json_encode($data);
    exit;
}

