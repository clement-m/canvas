<?php 

require_once 'vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('views');
$twig = new Twig_Environment($loader);

session_start();

$twig->addGlobal('session', $_SESSION);

$template = $twig->loadTemplate('index.twig.html');

echo $twig->render('index.twig.html', array('name' => 'Fabien'));