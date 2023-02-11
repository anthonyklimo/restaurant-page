function renderHome() {
    const content = document.getElementById('content');

    const contentHome = document.createElement('div');
    contentHome.classList.add('contentHome');


    function addParagraph(text) {
        const newPara = document.createElement('p');
        newPara.classList.add('homePara');
        newPara.innerHTML = text;
        contentHome.appendChild(newPara);
    }

    addParagraph('Welcome to Maikham!');

    content.appendChild(contentHome);

}

export {renderHome};