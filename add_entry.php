<?php 
	require('conn.php');
	
	$disorder = htmlspecialchars($_REQUEST['disorder_name']);
	$summary = htmlspecialchars($_REQUEST['summary']);
	$detailed_description = htmlspecialchars($_REQUEST['detailed_description']);
	$body_parts = htmlspecialchars($_REQUEST['body_parts']);
	$internet_links = htmlspecialchars($_REQUEST['internet_links']);
	$similar_disorders = htmlspecialchars($_REQUEST['similar_disorders']);
		
	$sql = "INSERT INTO genetic_disorders (name, summary, detailed_description,
		affected_body_parts, internet_links, similar_disorders) 
		VALUES ('$disorder', '$summary', '$detailed_description', 
		'$body_parts', '$internet_links', '$similar_disorders')";
	
	if ($conn->query($sql) === TRUE) {
		echo "Disorder added succesfully!";
	} else {
		echo "Error adding the record!";
	}
	
	$conn->close();
?>