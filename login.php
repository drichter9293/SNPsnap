<!DOCTYPE html>
<html>
	<head>
		<title>Administrator Login</title>
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/skeleton.css">
		<link rel="stylesheet" type="text/css" href="css/snpsnap.css">
	</head>

	<body class="container">
		<h1 class="center">Admin Login!</h1>

		<hr />

		<form action="checkLogin.php" method="post">
			<div class="row">
				<div class="twelve columns">
					<label for="usernameInput">Username</label>
					<input class="u-full-width" name="user" type="text" id="usernameInput">
				</div>
			</div>

			<div class="row">
				<div class="twelve columns">
				  <label for="passwordInput">Password</label>
				  <input class="u-full-width" name="password" type="password" id="passwordInput">
				</div>
			</div>

			<span class="row"><input type="submit" class="twelve columns button-primary"></span>
		</form>
	</body>
</html>
