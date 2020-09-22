<?php

$host = "localhost"; /* Host name */
$user = "johnic32dreamhos"; /* User */
$password = "mnCbGtMb"; /* Password */
$dbname = "test_quiz"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}