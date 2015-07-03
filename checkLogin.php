<?php
	session_start();
	require('conn.php'); // Holds all of our database connection information

	
	// Get the data passed from the form
	$username = $_POST['user'];
	$password = $_POST['password'];
	
	// Do some basic sanitizing
	$username = mysqli_real_escape_string($conn, $username);
	$password = mysqli_real_escape_string($conn, $password);
	
	$sql = "SELECT * FROM admins WHERE username = '$username' AND password = '$password'";
	$result = $conn->query($sql) or die(mysql_error());
	
	$count = mysqli_num_rows($result);
	
	if ($count == 1) {
		$_SESSION['loggedIn'] = "true";
		header("Location: admin.php"); // This is wherever you want to redirect the user to
	} else {
		$_SESSION['loggedIn'] = "false";
		echo "Login Failed!";
		//header("Location: loginFailed.php"); // Wherever you want the user to go when they fail the login
	}
?>
