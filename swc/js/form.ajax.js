/*
	Componente nuevo 
	StartWebPerú | @ninkovski
	Componente para validacion de campos
*/
document.getElementById("nro-celular").addEventListener("input", function (event) {
	var inputValue = event.target.value;
	var numericValue = inputValue.replace(/\D/g, '');
	event.target.value = numericValue;
});


