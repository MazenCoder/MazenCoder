<?php
    use PHPMailer\PHPMailer\PHPMailer;

    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['body'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $body = $_POST['body'];

        $data = array(
            "fullName" => $name,
            "emailAddress" => $email,
            "subject" => $subject,
            "message" => $body,
        );

        $payload = json_encode($data);

        // Initialise new cURL session
        $ch = curl_init('https://us-central1-mazen-coder.cloudfunctions.net/sendEmail');
//        $ch = curl_init('');

        // Return result of POST request
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Get information about last transfer
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);

        // Use POST request
        curl_setopt($ch, CURLOPT_POST, true);

        // Set payload for POST request
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

        // Set HTTP Header for POST request
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'Content-Type: application/json',
                'Content-Length: ' . strlen($payload),
              )
        );

        // Execute a cURL session
        $result = curl_exec($ch);

        // Close cURL session
        curl_close($ch);

//        require_once "PHPMailer/PHPMailer.php";
//        require_once "PHPMailer/SMTP.php";
//        require_once "PHPMailer/Exception.php";
//
//        $mail = new PHPMailer();
//
//        //SMTP Settings
//        $mail->isSMTP();
//        $mail->Host = "smtp.gmail.com";
//        $mail->SMTPAuth = true;
//        $mail->Username = "contact.mazencoder@gmail.com"; //enter you email address
//        $mail->Password = ''; //enter you email password
//        $mail->Port = 465;
//        $mail->SMTPSecure = "ssl";
//
//        //Email Settings
//        $mail->isHTML(true);
//        $mail->setFrom($email, $name);
//        $mail->addAddress("alareqimazen@gmail.com"); //enter you email address
//        $mail->Subject = ("$email ($subject)");
//        $mail->Body = $body;
//
//        if ($mail->send()) {
//            $status = "success";
//            $response = "Email is sent!";
//        } else {
//            $status = "failed";
//            $response = "Something is wrong: <br><br>" . $mail->ErrorInfo;
//        }
//
//        exit(json_encode(array("status" => $status, "response" => $response)));
    }

    exit(json_encode(array("status" => 'success', "response" => 200)));
?>
