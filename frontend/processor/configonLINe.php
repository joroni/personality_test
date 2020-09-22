<?php

$host = "mysql.johnic32.dreamhosters.com"; /* Host name */
$user = "johnic32dreamhos"; /* User */
$password = "mnCbGtMb"; /* Password */
$dbname = "johnic32_dreamhosters_co"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}