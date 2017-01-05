<?php
/*
 * Title: PHP Tutorial 1: Secure Contact Form
 * URL: http://www.matthewwatts.net/tutorials/php-tutorial-1-creating-a-secure-contact-form-for-your-website/
 * For: Processing form data and sending it to a specified E-mail address.
 * Site: matthewwatts.net
 * Author: Matthew Watts
 * Company: Rexibit Web Services - http://www.rexibit.com
 * Last Modified: 2010-09-05
 */

// Main Variables Used Throughout the Script
$domain = "http://wisphoto.com" . $_SERVER["HTTP_HOST"];
$siteName = "Wisconsin Photography";
$siteEmail = "support@wisphoto.com";

	/*
	 * Process the web form variables
	 * Strip out any malicious attempts at code injection, just to be safe.
	 * All that is stored is safe html entities of code that might be submitted.
	 */
	 
	$errors = array();
	$data = array();
	  
	$contactName = htmlentities(substr($_POST["contactName"], 0, 100), ENT_QUOTES);
	$contactEmail = htmlentities(substr($_POST["contactEmail"], 0, 100), ENT_QUOTES);
	$messageContent = htmlentities(substr($_POST["messageContent"], 0, 10000), ENT_QUOTES);
	
       /*
	* Perform some logic on the form data
	* If the form data has been entered incorrectly, return an Error Message object
	*/
	 
	// Check if all of the form fields contain data before we allow it to be submitted successfully
	if(empty($contactName)) {
	  $errors['contactName'] = 'Please enter your name.';
	}
	if(empty($contactEmail)) {
	  $errors['contactEmail'] = 'A return email address is needed.';
	}
	if(empty($messageContent)) {
	  $errors['messageContent'] = 'Please enter a message so we know how to respond.';
	}
	// Check if the data entered for the E-mail is formatted like an E-mail should be
	if (!eregi('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]{2,})+$', $contactEmail)){
	  $errors['contactEmail'] = 'Please enter a valid e-mail address.';
	}
	
	//if there are errors, return a false success message and the errors object
	if (!empty($errors)){
	  $data['success'] = false;
	  $data['errors'] = $errors;
	  $data['message'] = 'Oops, looks like something went wrong. We will get right on that!';
	} else {
	//if there are NO errors, return a true success message 
	  $data['success'] = true;
	  $data['message'] = 'Thanks! We will get back to you as soon as possible.';
	
	
		// Prepare the E-mail elements to be sent
		$subject = 'From Wisphoto.com contact form';
		$message = 
		'<html>
			<head>
			<title>' . $siteName . ': A Contact Message</title>
			</head>
			<body>
			<p><strong>From:</strong> <br />
			  <em>Name: </em> '. $contactName . ' <br />
			  <em>Email: </em> ' . $contactEmail . '
			</p>
			' . wordwrap($messageContent, 100) . '
			
			</body>
		</html>';
		
		/*
		 * We are sending the E-mail using PHP's mail function
		 * To make the E-mail appear more legit, we are adding several key headers
		 * You can add additional headers later to futher customize the E-mail
		 */
		
		$to = $siteName . ' Contact Form <' . $siteEmail . '>';
		
		// To send HTML mail, the Content-type header must be set
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		
		// Additional Headers
		$headers .= 'From: ' . $contactName . ' <' . $contactEmail . '>' . "\r\n";
		$headers .= 'Reply-To: ' . $contactName . ' <' . $contactEmail . '>' . "\r\n";
		$headers .= 'Return-Path: ' . $contactName . ' <' . $contactEmail . '>' . "\r\n";
		$headers .= 'Date: ' . date("r") . "\r\n";
		$headers .= 'X-Mailer: ' . $siteName . "\r\n";
		
		// And now, mail it
		mail($to, $subject, $message, $headers);
	}
	
	echo json_encode($data);
?>