<?php
	$servername="mysql.galaxometry.dreamhosters.com";
	$username="snpsnapadmin";
	$password="wegetthejobdone";
	$database="snpsnap";
	// Create connection
	$conn= mysqli_connect($servername, $username, $password, $database);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}	
?>