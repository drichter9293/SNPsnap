<!DOCTYPE html>
<html>
	<head>
		<title>3D Model</title>
		<link rel="stylesheet" href="css/bodystyle.css" type="text/css" media="all"/>
		<style type="text/css">
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
			* { font-family: sans-serif; }
			#bodyCanvas, #list, #summaryDisplay { background-color: initial; }
			#list, #summaryDisplay { height: initial; }
			#summary {
				text-align: justify;
				font-size: large;
				font-family: monospace;
			}
		</style>
	</head>

	<body>
		<div id="bodyCanvas">
			<script src="js/three.min.js" type="text/javascript"></script>
			<script src="js/body.js" type="text/javascript"></script>
		</div>

		<script type="text/javascript">
			function updatePage(disorder) {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState==4 && xmlhttp.status==200) {
						var data = xmlhttp.responseText.split("[BRK]");
						document.getElementById("summary").innerHTML = data[0];
						highlightBodyParts(data[1]);
					}
				};
				xmlhttp.open("POST", "get_disorder_attributes.php?disorder=" + disorder +
					"&attributes=summary, affected_body_parts", true);
				xmlhttp.send();
			}
		</script>

		<div id="wrapper">
			<div id="list">
				<h3> Disorder List </h3>

				<form action="" method="post">
					<select name="disorder" size="6" onchange="updatePage(this.value)">
						<?php
							require('conn.php');
							$sql = "SELECT name FROM genetic_disorders";
							$result = $conn->query($sql);
							while ($row = $result->fetch_array()) {
								echo "<option value='$row[0]'>$row[0]</option>\n";
							}
						?>
					</select>
				</form>
			</div>

			<hr />

			<div id="summaryDisplay">
				<h3>Summary </h3>
					<div id="summary">
					</div>
			</div>
		</div>

	</body>
</html>
