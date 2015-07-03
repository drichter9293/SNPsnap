<?php 
	$disorder = $_REQUEST['disorder'];
	require('conn.php');
	
	$sql = "DELETE FROM genetic_disorders  WHERE name='$disorder'";	
	
	if ($conn->query($sql) === TRUE) {
		echo "Disorder removed succesfully!";
	} else {
		echo "Error removing the record!";
	}
	
	$conn->close();
?>