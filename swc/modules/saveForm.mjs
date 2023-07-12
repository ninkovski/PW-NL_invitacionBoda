/*
    Componente Guardar Formulario
    StartWebPerú | @ninkovski
    Validar, enviar correo y guardar informacion en sheet de google 
*/
import { validMessage } from '../params/messages.js';
import { saveToGoogleSheets } from '../cloud/sheet/form.js';
import { sendMailWelcome } from './mail.mjs'
import { invitados } from '../params/invitados.js';

document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var code = document.getElementById("codigo").value;
    var nro = document.getElementById("nro-celular").value;

    //Validaciones 
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert(validMessage.ImputMailInvalid);
        return;
    }

    var codeRegex = /^\d{6}$/;
    if (!codeRegex.test(code)) {
        console.log(code);
        alert(validMessage.ImputCodeInvalid);
        return;
    }
    var nroRegex = /^\d{9}$/;
    if (!nroRegex.test(nro)) {
        alert(validMessage.ImputNroInvalid);
        return;
    }
    // Validar código
    if (!validarCodigo(code)) {
        alert(validMessage.ImputInvalidCode);
        return;
    }

// llamando a modulo de envio de correos y de sheets de google
    sendMailWelcome();
    saveToGoogleSheets();

});
function validarCodigo(codigo) {
    for (let i = 0; i < invitados.length; i++) {
        if (invitados[i][6] === codigo) {
            return true; // El código existe
        }
    }
    return false; // El código no existe
}