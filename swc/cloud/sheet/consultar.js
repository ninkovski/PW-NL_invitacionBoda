export function consultarSheet() {
    // Configura la clave de API y el ID de la hoja de cálculo
    var apiKey = 'AIzaSyAOx0UsH1mQbUJlm7K--RNt2aPXbDyhalA';
    var spreadsheetId = '1zBlWpyP03DcxO-hhOMR6nKwez-UORhS03SCuL1J22-0';
    var range = 'confirmados!A1:G'; // Rango de celdas que deseas consultar

    return new Promise(function (resolve, reject) {
        // Carga la API de Google Sheets
        gapi.load('client', function () {
            gapi.client.init({
                apiKey: apiKey
            }).then(function () {
                // Realiza la solicitud para obtener los valores de la hoja de cálculo
                return gapi.client.request({
                    path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
                });
            }).then(function (response) {
                var values = response.result.values;
                resolve(values);
            }).catch(function (error) {
                console.error('Error al consultar la hoja de cálculo:', error.result.error.message);
                reject(error);
            });
        });
    });
}
