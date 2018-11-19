<?php



session_start();
$user = "root";
$pass = "";
$pdo = null;
try {
	$pdo = new PDO('mysql:host=localhost;dbname=multiplayer', $user, $pass);
} catch (PDOException $e) {
	print "Erreur !: " . $e->getMessage() . "<br/>";
	die();
}

$id = $_POST['id'];
$posX = $_POST['posX'];
$posY = $_POST['posY'];

$req = 'UPDATE players SET posX = ' . $posX . ', posY = ' . $posY . ' WHERE players.id = ' . $id;

echo $req;

$pdo->query($req);

foreach($pdo->query('SELECT * from players') as $row) {
	//$posX = $row['posX'];
	//$posY = $row['posY'];
	echo "<input type=\"hidden\" id=\"posY" . $_SESSION['id'] . "\" value=\"" . $posY . "\" />";
	echo "<input type=\"hidden\" id=\"posX" . $_SESSION['id'] . "\" value=\"" . $posX . "\" />";
	echo "<input type=\"hidden\" id=\"id" . $_SESSION['id'] . "\" value=\"" . $_SESSION['id'] . "\" />";
}



$pdo = null;