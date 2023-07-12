/*
    Componente Guardar Formulario
    StartWebPerú | @ninkovski
    Validar, enviar correo y guardar informacion en sheet de google 
*/
import { validMessage } from '../params/messages.js';
import { saveToGoogleSheets } from '../cloud/sheet/form.js';
import { sendMailWelcome } from './mail.mjs'
import { invitados } from '../params/invitados.js';
import { consultarSheet } from '../cloud/sheet/consultar.js';

document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault();

    var sendButton = document.getElementById("send-button");
    sendButton.disabled = true;

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
    // codigo para validar que existe usar la funcion consultar sheet la columna que valida es la nro 2
    consultarSheet()
        .then(function (confirmados) {
            if (!validarCodigoExiste(code, confirmados)) {
                // El código existe
                sendMailWelcome();
                saveToGoogleSheets();
            } else {
                // El código no existe
                alert(validMessage.ImputDuplicadeCode);
            }
        })
        .catch(function (error) {
            console.error('Error al consultar la hoja de cálculo:', error);
        })
        .finally(function () {
            // Habilitar el botón nuevamente
            sendButton.disabled = false;
        });
    //

});
function validarCodigo(codigo) {
    for (let i = 0; i < invitados.length; i++) {
        if (invitados[i][6] === codigo) {
            return true;
        }
    }
    return false;
}

function validarCodigoExiste(codigo, confirmados) {
    console.log("data");

    console.log(confirmados);

    for (let i = 0; i < confirmados.length; i++) {

        console.log(codigo + " mensaje " + confirmados[i][1]);
        if (confirmados[i][1] === codigo) {
            console.log("true");

            return true; // El código existe
        }
    }
    return false; // El código no existe
}