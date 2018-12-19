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
	echo "test";
$accessoire = "patnfoule";
echo substr($accessoire, 0, 1) .  substr($accessoire, -1, 1);
	?>
	<div id="demo"></div>
</body>
</html>