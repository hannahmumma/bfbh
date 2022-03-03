<?php

/**
 * @package    BFBH 
 * @subpackage Services\MailService
 * @version    1.0.0
 */
namespace BFBH\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use BFBH\Services\RecaptchaService;

class MailService
{
    /**
     * @method run    initialize
     * @return void
     */
    public function __construct()
    {
        add_action('wp_ajax_initMail', [$this, 'initMail']);
        add_action('wp_ajax_nopriv_initMail', [$this, 'initMail']); 
    }

    public function initMail()
    {
        status_header(200);

        $mail = new PHPMailer(true);
        $recaptcha = new RecaptchaService();

        $verify = $recaptcha->verifyRecaptcha();
        $obj = json_decode($verify['response_data']);
        $success = $obj->success;
        $score = $obj->score;

        if ($success === true && $score > 0.5) {

            try {

                $this->sendMail($mail);

            } catch (Exception $e) {

                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

            }

            exit($success);
        }

        wp_die();
    }

    public function sendMail($mail)
    {
    	$email = getenv('CONTACT_EMAIL');
    	$password = getenv('CONTACT_EMAIL_PASS');
        $admin_email = getenv('ENVIRONMENT') === 'dev' ? $email : get_bloginfo('admin_email');

        //Server settings
        // $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $email;
        $mail->Password   = $password;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        //Recipients

        $mail->SetFrom($email, 'BFBH Website');
        $mail->AddAddress($admin_email, 'Brian Frazer');
        $mail->AddBCC($email, 'BCC BFBH');        

        $contact = "Name: {$_POST['first_name']} {$_POST['last_name']} <br /> Email: {$_POST['email']}";

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Happy Place Inquiry';
        $mail->Body    = $_POST['message'] ? "{$_POST['message']}<br /><br />{$contact}" : "I'm interested in renting the house.<br /><br />{$contact}";
        $mail->AltBody = 'I\'m interested in renting the house';
          
        $mail->send();
    }
}
