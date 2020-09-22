<?php

require_once 'config.php';
$info = json_decode(file_get_contents("php://input"));
if(count($info) > 0) {
    $user_id = mysqli_real_escape_string($con, $info->user_id);
    $question_id = mysqli_real_escape_string($con, $info->question_id);
    $choice_id = mysqli_real_escape_string($con, $info->choice_id);
    $query = "INSERT INTO answers(user_id, question_id, choice_id) VALUES ('$user_id', '$question_id', '$choice_id')"; 
    if(mysqli_query($con, $query)) {
        echo "Insert Data Successfully";
    }
    else {
        echo "Failed";
    }
}
?>