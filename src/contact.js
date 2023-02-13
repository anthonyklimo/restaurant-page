function renderContact() {
    const pageContent = document.getElementById('pages');

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');


    function addParagraph(text) {
        const newPara = document.createElement('p');
        newPara.classList.add('homePara');
        newPara.textContent = text;
        contact.appendChild(newPara);
    }

    addParagraph('Find us at 1125 Finnegan Way, Fairhaven, WA');
    addParagraph('Phone: (360)-746-8098');


    pageContent.appendChild(contact);

}

export { renderContact };