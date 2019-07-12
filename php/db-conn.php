<?php

$host = 'localhost';
$dbname = 'magnall';
$charset = 'utf8mb4';

$username = 'username';
$password = 'password';
$options = [
			PDO::ATTR_ERRMODE 			 => PDO::ERRMODE_EXCEPTION,
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			PDO::ATTR_EMULATE_PREPARES   => false,
		   ];
$dsn = "mysql:host=$host;dbname=$dbname;charset=$charset;";
?>