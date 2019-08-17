<?php
include_once('db-conn.php');
$requestPayload = file_get_contents("php://input");

$recived_array = json_decode($requestPayload, true);

$pol = $recived_array[0];
$godine = $recived_array[1];
$fizicka_aktivnost = $recived_array[2];
$san = $recived_array[3];
$pritisak = $recived_array[4];
$checked_answers = $recived_array["checkedValuesStr"];

//PDO prepared statement to send to database
try {

    $pdo = new PDO($dsn, $username, $password, $options);

    $query = "INSERT INTO magnal_kviz_odgovori(Pol,Godine,Fizicka_aktivnost,Kakav_vam_je_san,Kakav_vam_je_krvni_pritisak,checked_answers) VALUES(:pol,:godine,:fizicka_aktivnost,:san,:pritisak,:checked_answers)";

    $statement = $pdo->prepare($query);

    $statement->bindParam(':pol', $pol, PDO::PARAM_STR);
    $statement->bindParam(':godine', $godine, PDO::PARAM_STR);
    $statement->bindParam(':fizicka_aktivnost', $fizicka_aktivnost, PDO::PARAM_STR);
    $statement->bindParam(':san', $san, PDO::PARAM_STR);
    $statement->bindParam(':pritisak', $pritisak, PDO::PARAM_STR);
    $statement->bindParam(':checked_answers', $checked_answers, PDO::PARAM_STR);

    $statement->execute();

    $result = $statement->fetchAll();

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
} 
?>
