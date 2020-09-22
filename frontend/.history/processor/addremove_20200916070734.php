<?php

include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$request_type = $data->request_type;

// Get all records
if($request_type == 1){

    $stmt = $con->prepare("SELECT * FROM users");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    if($result->num_rows > 0){
       while($row = $result->fetch_assoc()) {
            $data[] = array("id"=>$row['id'],"fname"=>$row['fname'],"lname"=>$row['lname'],"username"=>$row['username']); 
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
    
    
    // Check username already exists
    $stmt = $con->prepare("SELECT * FROM users WHERE user_id=?");
    $stmt->bind_param('s',$user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    $return_arr = array();
    if($result->num_rows == 0){

        // Insert
        
        $insertSQL = "INSERT INTO `user_question_answer` (`id`, `user_id`, `question_id`, `choice_id`, `answer_time`) VALUES (NULL,?, ?, ?, current_timestamp())";
        $stmt = $con->prepare($insertSQL);
        $stmt->bind_param("sss",$user_id,$question_id,$choice_id,$answer_time);
        $stmt->execute();

        $lastinsert_id = $stmt->insert_id;
        if($lastinsert_id > 0){
            $return_arr[] = array("id"=>$lastinsert_id,"user_id"=>$user_id,"question_id"=>$question_id,"choice_id"=>$choice_id,"answer_time"=>$answer_time);
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
    $userid = $data->userid;

    // Check userid exists
    $stmt = $con->prepare("SELECT * FROM users WHERE id=?");
    $stmt->bind_param('i',$userid);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    
    if($result->num_rows > 0){

        // Delete
        $deleteSQL = "DELETE FROM users WHERE id=?";
        $stmt = $con->prepare($deleteSQL);
        $stmt->bind_param("i",$userid);
        $stmt->execute();
        $stmt->close();

        echo 1;
        exit;
    }else{
        echo 0;
    }

    exit;
}

