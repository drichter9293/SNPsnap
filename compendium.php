<!DOCTYPE html>
<html>
	<head>
		<title>Compendium</title>
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/skeleton.css">
		<link rel="stylesheet" type="text/css" href="css/snpsnap.css">
	</head>

	<body class="container">
		<script type="text/javascript">
			function addInternetLinks(links_string) {
				document.getElementById("internet_links").innerHTML = "";
				var links = links_string.split(",");
				for (var i=0; i<links.length; i++) {
					var a = document.createElement('a');
					var linkText = document.createTextNode(links[i] + "\n");
					a.appendChild(linkText);
					a.href = links[i];
					a.target = "_blank";
					document.getElementById("internet_links").appendChild(a);
				}
			}

			function updatePage(disorder){
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState==4 && xmlhttp.status==200) {
						var data = xmlhttp.responseText.split("[BRK]");
						document.getElementById("disorder_name").innerHTML = disorder;
						document.getElementById("description").innerHTML = data[0];
						addInternetLinks(data[1]);
						document.getElementById("similar_disorders").innerHTML = data[2];

						// Check if info block is hidden
						var infoBlockEl = document.getElementById("disorder_information_block");
						if (infoBlockEl.offsetParent === null)
							infoBlockEl.style.display = "block";
					}
				};
				xmlhttp.open("POST", "get_disorder_attributes.php?disorder=" + disorder +
					"&attributes=detailed_description, internet_links, similar_disorders", true);
				xmlhttp.send();
			}
		</script>


		<div class="row">
			<div class="four columns default-margin-bottom" id="list">
				<h3> Disorder List </h3>

				<form action="" method="post">
					<select class="u-full-width" name="disorder" size="6" onchange="updatePage(this.value)">
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

			<div class="eight columns" id="disorder_information_block" style="display: none;">
				<h1 id="disorder_name"></h1>

				<hr />

				<h2 class="header-margin-bottom">Description</h2>
				<div id="description" class="monospaced-font-text">
				</div>

				<h2 class="header-margin-top header-margin-bottom">Internet Links</h2>
				<div id="internet_links" class="no-underline-links monospaced-font-text">
				</div>

				<h2 class="header-margin-top header-margin-bottom">Similar Disorders</h2>
				<div id="similar_disorders" class="monospaced-font-text">
				</div>
			</div>
		</div>

	</body>
</html>
