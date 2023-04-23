<?php

//github pages doesn't support server-side languages, so this file is not in use :(

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