/*
    Autentificacion 
    StartWebPerú | @ninkovski
    Guardar registro de formulario 
*/
import { appParams } from '../../config.js';

export function saveToGoogleSheets() {

    var formData = new FormData();
    formData.append("Aplicacion", appParams.Name);
    formData.append("Codigo", document.getElementById("codigo").value);
    formData.append("Correo", document.getElementById("email").value);
    formData.append("Telefono", document.getElementById("nro-celular").value);
    // Obtener la fecha actual en formato "dd/mm/aaaa hh:mm:ss"
    var fechaActual = new Date().toLocaleString("es-PE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    formData.append("Fecha", fechaActual);
    fetch(
        appParams.SheetURL,
        {
            method: "POST",
            body: formData
        }
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

} 
