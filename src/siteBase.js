
function renderHeader() {

    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = 'Maikham Thai & Lao';

    content.appendChild(header);

}

function renderNav() {
    const content = document.getElementById('content');

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('btn');
    homeButton.innerHTML = "Home";

    const menuButton = document.createElement('button');
    menuButton.classList.add('btn');
    menuButton.innerHTML = "Menu";

    const contactButton = document.createElement('button');
    contactButton.classList.add('btn');
    contactButton.innerHTML = "Contact";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);



    content.appendChild(nav);

}

export { renderHeader, renderNav }

