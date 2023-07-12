/*
    Variables de Footer  
    StartWebPerú | @ninkovski
*/

export const redes = {
    linkedin:
        '<li><a ' +
        'href="https://www.linkedin.com/company/start-web-consulting-per%C3%BA/" ' +
        'target="_blank" class="fab fa-linkedin"><span class="label">LinkedIn</span></a></li>',
    facebook:
        '<li><a ' +
        'href="https://www.facebook.com/profile.php?id=100094164543754"' +
        'target="_blank" class="fab brands fa-facebook-f"><span class="label">Facebook</span></a></li>',
    instagram:
        '<li><a ' +
        'href="https://www.instagram.com/start.web.peru/" ' +
        'target="_blank"  class="fab brands fa-instagram"><span class="label">Instagram</span></a></li>',
    whatsApp:
        '<li><a ' +
        'href="https://api.whatsapp.com/send?phone=51901976987&text=Hola%20me%20encantó%20tu%20pagina%20web%21" ' +
        'target="_blank"  class="fab brands fa-whatsapp"><span class="label">Email</span></a></li>',
};


export const assets = {
    class: '<ul class="icons">',
    close: `</ul></p></div></div>`,
}
export const redesGroup = `
    ${redes.linkedin}
    ${redes.facebook}
    ${redes.instagram}`;

export const copyright =
    `<div class="row copyright"><div class="col-md-12 text-center">
    <p><Strong><small class="block">Powered By </small></Strong>
    <small class="block">@StarWebConsulting - Perú 2023</a></small></p>
    <ul class="fh5co-social-icons">
`;

export const footerContent = `
    ${copyright}
    ${redesGroup}
    ${assets.close}
`;
export const headerContent =
    `<ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">Nuestra Historia</a></li>
        <li><a href="gallery.html">Galeria</a></li>
        <li><a href="contact.html">Sponsor</a></li>
    </ul>`;
