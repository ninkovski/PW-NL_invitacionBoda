/*
	Componentes Generales  
	StartWebPerú | @ninkovski
*/
import { footerContent, headerContent } from '../params/components.js';

window.addEventListener('DOMContentLoaded', function () {
	var footerContainer = document.getElementById('footer-container');
	var headerContainer = document.getElementById('header-container');
	var headerMovilContainer = document.getElementById('fh5co-offcanvas');

	footerContainer.innerHTML = footerContent;
	headerContainer.innerHTML = headerContent;
	headerMovilContainer.innerHTML = headerContent;

});
