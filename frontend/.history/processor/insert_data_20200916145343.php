<?php

require_once 'dbconnect.php';
$info = json_decode(file_get_contents("php://input"));
if(count($info) > 0) {
    $name = mysqli_real_escape_string($con, $info->name);
    $email = mysqli_real_escape_string($con, $info->email);
    $age = mysqli_real_escape_string($con, $info->age);
    $query = "INSERT INTO insert_emp_info(name, email, age) VALUES ('$name', '$email', '$age')"; 
    if(mysqli_query($con, $query)) {
        echo "Insert Data Successfully";
    }
    else {
        echo "Failed";
    }
}
?>