<?php

//if (isset($_POST['submit'])) {
    // $name = $_POST['name'];
    // $subject = $_POST['subject'];
    // $mailFrom = $_POST['mail'];
    // $message = $_POST['message'];

    // $mailTo = "jhnelson.contact@gmail.com";
    // $headers = "From: ".$mailFrom;
    // $txt = "You have received an email from ".$name.".\n\n".$message;

    // mail($mailTo, $subject, $txt, $headers);
    // header("Location:index.html");
//}

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = 'From: portfolio site'; 
    $to = 'jhnelson.contact@gmail.com';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, $from)) { 
           $success = "Message successfully sent";
        } else {
            $success = "Message Sending Failed, try again";
        }
    }

?>