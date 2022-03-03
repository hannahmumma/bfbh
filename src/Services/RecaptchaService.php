<?php

/**
 * @package    BFBH 
 * @subpackage Services\MailService
 * @version    1.0.0
 */
namespace BFBH\Services;

class RecaptchaService
{
    /**
     * @method run    initialize
     * @return void
     */
    public function verifyRecaptcha()
    {
        if (!function_exists('curl_init') || !function_exists('curl_setopt')) {
            throw new \Exception("cURL support is required, but can't be found.");
        }

        $request = $this->setupRequest();

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $request[0]);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $request[1]);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($request[2]));

        $response_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $response_data = curl_exec($ch);

        curl_close($ch);

        $response = [
            'http_code' => $response_code, 
            'response_data' => $response_data
        ];

        return $response;
    }

    public function setupRequest()
    {
        $endpoint = 'https://www.google.com/recaptcha/api/siteverify';

        $httpHeader = [
            'Content-type: application/x-www-form-urlencoded; charset=utf-8',            
            'Accept: application/json'
        ];

        $params = [
            'secret' => getenv('GOOGLE_RECAPTCHA_SECRET_KEY'),
            'response' => $this->getRecaptchaToken(),
        ];

        return [
            $endpoint, $httpHeader, $params
        ];

    }

    public function getRecaptchaToken()
    {
        if (!empty($_REQUEST)) {

            return $_REQUEST['token'];
        }
    }
}
