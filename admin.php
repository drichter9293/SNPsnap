<?php
	session_start();
	if (!$_SESSION['loggedIn']) {
		header('Location: index.php');
		die();
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Admin Page</title>

		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/skeleton.css">
		<link rel="stylesheet" type="text/css" href="css/snpsnap.css">
	</head>

	<body class="container">
		<h1> Add a Disorder! </h1>

		<script>
		function add(disorder_name, summary, detailed_description, body_parts, internet_links, similar_disorders) {
			var body_parts_arr = [];
			var x = document.getElementById("body_parts");
			for (var i=0; i<x.options.length; i++) {
				if (x.options[i].selected)
					body_parts_arr.push(x.options[i].value);
			}
			body_parts = body_parts_arr.join();

			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState==4 && xmlhttp.status==200) {
					window.alert(xmlhttp.responseText);
					var x = document.getElementById("disorder");
					x.innerHTML += "<option value=\'" + disorder_name +"\'>" + disorder_name + "</option>";
				}
			};

			xmlhttp.open("POST", "add_entry.php?disorder_name=" + disorder_name +
				"&summary=" + summary +
				"&detailed_description=" + detailed_description +
				"&body_parts=" + body_parts +
				"&internet_links=" + internet_links +
				"&similar_disorders=" + similar_disorders, true);

			xmlhttp.send();
		}
		</script>

		<form action="Javascript:add(this.disorder_name.value, this.summary.value, this.detailed_description.value,
this.body_parts.value, this.internet_links.value, this.similar_disorders.value)">
			<div class="row">
				<div class="twelve columns">
					<label for="disorder_name">Name</label>
					<input class="u-full-width" type="text" name="disorder_name" id="disorder_name" >
				</div>
			</div>

			<div class="row">
				<div class="twelve columns">
					<label for="summary">Summary</label>
					<input class="u-full-width" name="summary" type="text" id="summary">
				</div>
			</div>

			<div class="row">
				<div class="twelve columns">
					<label for="detailed_description">Detailed Description</label>
					<input class="u-full-width" type="text" name="detail_description" id="detailed_description">
				</div>
			</div>

			<div class="row">
				<div class="twelve columns">
					<label for="body_parts">Body Parts</label>

					<select name="body_parts[]" id="body_parts" multiple="multiple" size="5">
						<?php
							require('conn.php');
							$sql = "SHOW COLUMNS FROM genetic_disorders LIKE 'affected_body_parts'";
							$result = $conn->query($sql);
							$row = $result->fetch_row();
							$type = $row[1];
							$regex = "/'(.*?)'/";
							preg_match_all($regex, $type, $enum_array);
							$enum_fields = $enum_array[1];
							foreach ($enum_fields as $key=>$value) {
								echo "<option value='$value'>$value</option>\n";
							}
						?>
					</select>
				</div>
			</div>

			<div class="row">
				<div class="twelve columns">
					<label for="internet_links">Internet Links</label>
					<input class="u-full-width" type="text" name="internet_links" id="internet_links">
				</div>
			</div>

			<div class="row">
				<div class="twelve columns">
					<label for="similar_disorders">Similar Disorders</label>
					<input class="u-full-width" type="text" name="similar_disorders" id="similar_disorders">
				</div>
			</div>

			<input type="submit" class="button-primary" value="Add Disorder!">
		</form>

		<hr />

		<script>
			function remove(disorder) {
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState==4 && xmlhttp.status==200) {
						window.alert(xmlhttp.responseText);
						var x = document.getElementById("disorder");
						x.remove(x.selectedIndex);
					}
				};
				xmlhttp.open("POST", "remove_entry.php?disorder=" + disorder, true);
				xmlhttp.send();
			}
		</script>

		<h1 class="center header-margin-bottom"> Remove a Disorder! </h1>

		<form action="Javascript:remove(this.disorder.value)">
			<select name="disorder" id="disorder" size="6">
				<?php
					require('conn.php');
					$sql = "SELECT * FROM genetic_disorders";
					$result = $conn->query($sql);
					while ($row = $result->fetch_array()) {
						$value = $row['name'];
						echo "<option value='$value'>$value</option>\n";
					}
				?>
			</select>
			<input type="submit" value="Remove Disorder" class="negative">
		</form>
	</body>
</html>