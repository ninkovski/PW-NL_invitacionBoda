/*
	Componente nuevo 
	StartWebPerú | @ninkovski
	Componente nuevo para envio de correos con https://smtpjs.com/
	<script src="https://smtpjs.com/v3/smtp.js"></script>
*/
import { emailParams } from '../config.js';
import { confirmMessage } from '../params/messages.js';
import { emailWelcome } from '../params/mail.js';

export function sendMailWelcome() {

	var email = document.getElementById("email").value;

	Email.send({
		SecureToken: emailParams.SecureToken,
		To: email,
		From: emailParams.From,
		Subject: emailWelcome.Subject,
		Body: emailWelcome.Body
	}).then(function (message) {
		if (message === "OK") {
			alert(confirmMessage.mail);
		} else {
			message => alert(message)
		}
	});
}

