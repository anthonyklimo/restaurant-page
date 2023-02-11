function renderContact() {
    const content = document.getElementById('content');

    const contentContact = document.createElement('div');
    contentContact.classList.add('contentContact');


    function addParagraph(text) {
        const newPara = document.createElement('p');
        newPara.classList.add('homePara');
        newPara.innerHTML = text;
        contentHome.appendChild(newPara);
    }

    addParagraph('Find us at 1125 Finnegan Way, Fairhaven, WA');
    addParagraph('Phone: (360)-746-8098');

    content.appendChild(contentHome);

}