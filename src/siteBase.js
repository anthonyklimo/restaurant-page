import { renderHome } from "./home";
import { renderContact } from "./contact";
import { renderMenu } from "./menu";

const baseContent = document.getElementById('base-content');
const pageContent = document.getElementById('pages');

function renderHeader() {
    const header = document.createElement('h2');
    header.classList.add('header');
    header.textContent = 'Maikham Thai & Lao';

    baseContent.appendChild(header);
}

function renderNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('btn');
    homeButton.textContent = "Home";
    homeButton.addEventListener('click', () => {
        pageContent.innerHTML = '';
        renderHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('btn');
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', () => {
        pageContent.innerHTML = '';
        renderMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.classList.add('btn');
    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', () => {
        pageContent.innerHTML = '';
        renderContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    baseContent.appendChild(nav);
}

export { renderHeader, renderNav }

