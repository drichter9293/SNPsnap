<?php 
	$disorder = $_REQUEST['disorder'];
	$attributes = $_REQUEST['attributes'];
	$attributes_arr = explode(',', $attributes);
	require('conn.php');
	
	$result = "";
	foreach ($attributes_arr as $attribute) {
		$sql = "SELECT $attribute FROM genetic_disorders WHERE name='$disorder'";
		$row = $conn->query($sql)->fetch_row();
		$result .= $row[0] . "[BRK]";
	}
	
	echo $result;
?>