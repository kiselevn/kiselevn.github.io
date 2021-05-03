<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

$serverName = "localhost";
$userName = "root";
$password = "099122";
$db = "practice_task";

function generatePath($dir, $fileName)
{
  $pathArr = explode(DIRECTORY_SEPARATOR, getcwd() . DIRECTORY_SEPARATOR . $dir . DIRECTORY_SEPARATOR . $fileName);

  return join(DIRECTORY_SEPARATOR, $pathArr);
}

function translateCityName($city)
{
  switch ($city) {
    case 'Ulyanovsk':
      return 'Ульяновск';
    case 'Dimitrovgrad':
      return 'Димитровград';
    case 'Kazan':
      return 'Казань';
    case 'Samara':
      return 'Самара';
    case 'Saratov';
      return 'Саратов';
  }
}

$mysqli = mysqli_connect($serverName, $userName, $password, $db);
$mysqli->set_charset("utf8");

if (!$mysqli) {
  die("Connected failed: " . mysqli_connect_error());
}

$select_db = "USE practice_task;";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $first_name = trim($_REQUEST["first_name"]);
  $last_name = trim($_REQUEST["last_name"]);
  $email = trim($_REQUEST["email"]);
  $password = password_hash(trim($_REQUEST["password"]), PASSWORD_BCRYPT);
  $city = $_REQUEST["city"];
  $avatar = '';
  $programming_languages = implode(",", $_POST["programmingLanguages"]);
  $profession = $_REQUEST["profession"];
  $files = '';
  $comment = trim($_REQUEST["comment"]);

  if (!isset($_FILES["avatar"]["tmp_name"]['error'])) {
    $info = $_FILES["avatar"]["tmp_name"];
    $name = urlencode(date("m.d.y_H.i.s") . '_' . basename($_FILES["avatar"]["name"]));
    $newPath = generatePath('images', $name);
    $avatar = $info ? 'images' . addslashes(DIRECTORY_SEPARATOR) . $name : '';
    move_uploaded_file($info, $newPath);
  }

  if ($_FILES["files"]) {
    foreach ($_FILES["files"]["error"] as $key => $error) {
      if ($error == UPLOAD_ERR_OK) {
        $tmp_name = $_FILES["files"]["tmp_name"][$key];
        $name = urlencode(date("m.d.y_H.i.s") . '_' . basename($_FILES["files"]["name"][$key]));
        $newPath = generatePath('files', $name);
        $files .= 'files' . addslashes(DIRECTORY_SEPARATOR) . $name . ';';
        move_uploaded_file($tmp_name, $newPath);
      }
    }
  }

  $result = $mysqli->query("INSERT INTO users (first_name, last_name, email, password, city, avatar, programming_languages, profession, files, comment) VALUES ('$first_name', '$last_name', '$email', '$password', '$city', '$avatar', '$programming_languages', '$profession', '$files', '$comment')");

  $mode = isset($_REQUEST['mode']) ? $_REQUEST['mode'] : false;

  if ($result) {
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', '/optional/path/to/language/directory/');

    try {
      $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
      $mail->isSMTP();
      $mail->Host       = 'ssl://smtp.mail.ru';
      $mail->SMTPAuth   = true;
      $mail->SMTPDebug  = 0;
      $mail->Username   = 'practiceadm@mail.ru';
      $mail->Password   = '123456adM';
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port       = 465;

      $mail->setFrom('practiceadm@mail.ru', 'Регистрация');
      $mail->addAddress('practiceadm@mail.ru', 'Admin');

      $mail->isHTML(true);
      $mail->Subject = "Регистрация нового пользователя {$first_name} {$last_name}";
      $city = translateCityName($city);
      $mail->Body    = "Пользователь {$first_name} {$last_name} из города {$city} успешно зарегистрирован!";

      $mail->send();
    } catch (Exception $e) {
      echo "Сообщение не отправлено. Ошибка: {$mail->ErrorInfo}";
    }

    if ($mode === "result") {
      $users = $mysqli->query("SELECT * FROM users");

      require "result.html";
    }
  } else {
    echo "Ошибка: " . mysqli_error($mysqli);
  }
}

exit;
