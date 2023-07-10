/*
	Componentes Generales  
	StartWebPerú | @ninkovski
*/
import { footerContent, headerContent } from '../params/components.js';

window.addEventListener('DOMContentLoaded', function () {
	var footerContainer = document.getElementById('footer-container');
	footerContainer.innerHTML = footerContent;
});
window.addEventListener('DOMContentLoaded', function () {
	var footerContainer = document.getElementById('header-container');
	footerContainer.innerHTML = headerContent;
});