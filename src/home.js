function renderHome() {
    const pageContent = document.getElementById('pages');

    const home = document.createElement('div');
    home.setAttribute('id', 'home');


    function addParagraph(text) {
        const newPara = document.createElement('p');
        newPara.classList.add('homePara');
        newPara.textContent = text;
        home.appendChild(newPara);
    }

    addParagraph('Welcome to Maikham!');

    pageContent.appendChild(home);

}

export {renderHome};