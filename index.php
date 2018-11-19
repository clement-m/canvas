<!DOCTYPE html>
<html>
<head>
	<title>canvas</title>
	<link rel="stylesheet" type="text/css" href="src/css/style.css">
	
	<script type="text/javascript" src="src/js/ClassUnits.js"></script>
	<script type="text/javascript" src="src/js/ClassBall.js"></script>
	<script type="text/javascript" src="src/js/canvas.js"></script>


	<link rel="stylesheet" type="text/css" href="lib/css/bootstrap.css">
	<script type="text/javascript" src="lib/js/jquery.js"></script>
	<script type="text/javascript" src="lib/js/bootstrap.js"></script>
</head>
<body>
	<?php include('views/mainContent.php'); ?>

	<?php
		$posX = 0;
		$posY = 0;
		$user = "root";
		$pass = "";

		session_start();

		$pdo = null;
		try {
			$pdo = new PDO('mysql:host=localhost;dbname=multiplayer', $user, $pass);
		} catch (PDOException $e) {
			print "Erreur !: " . $e->getMessage() . "<br/>";
			die();
		}
		
		//$pdo->query('DELETE FROM players');

		if(isset($_SESSION['id'])) {

		} else {
			$_SESSION['id'] = random_int(0, 1000000);
			$posX = random_int(50, 600);
			$posY = random_int(50, 400);
			$pdo->query('INSERT INTO players (id, posX, posY) VALUES (' . $_SESSION['id']. ',' . $posX . ',' . $posY. ');');
		}
		$pdo = null;






		try {
		    $pdo = new PDO('mysql:host=localhost;dbname=multiplayer', $user, $pass);
		    foreach($pdo->query('SELECT * from players') as $row) {
		    	$id = $row['id'];
		        $posX = $row['posX'];
		        $posY = $row['posY'];
		        echo "<input type=\"hidden\" id=\"posY" . $id . "\" value=\"" . $posY . "\" />";
		        echo "<input type=\"hidden\" id=\"posX" . $id . "\" value=\"" . $posX . "\" />";
		        echo "<input type=\"hidden\" id=\"id" . $id . "\" value=\"" . $_SESSION['id'] . "\" />";

		    }
		    $pdo = null;
		} catch (PDOException $e) {
		    print "Erreur !: " . $e->getMessage() . "<br/>";
		    die();
		}



	?>
</body>
</html>