<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('de', 'phpmailer/language/');
$mail->IsHTML(true);

// from
$mail->setFrom('dummymail_simon@gmx.de', 'Sem from 1');

// to
$mail->addAddress('dummymail2@gmail.com');

// subject

$mail->Subject = "Hi, this is test mail";



// body

$body = '<h1> Welcome the mail in h1 </h1>'

if (trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-Mail:<strong> '.$_POST['email'].'</p>';
}

if (trim(!empty($_POST['message']))) {
    $body.='<p><strong>E-Mail:<strong> '.$_POST['message'].'</p>';
}


$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Error sending';
} else {
    $message = "Message sent";
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>