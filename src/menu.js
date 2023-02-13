function renderMenu() {
    const pageContent = document.getElementById('pages');

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    function newMenuItem(name, price, description) {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        //separates description from name and price
        const itemTop = document.createElement('div');
        item.appendChild(itemTop);
        
        const itemName = document.createElement('div');
        itemName.textContent = name;
        
        const itemPrice = document.createElement('div');
        itemPrice.textContent = price;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = description;

        itemTop.appendChild(itemName);
        itemTop.appendChild(itemPrice);

        item.appendChild(itemDescription);

        menu.appendChild(item);
    }

    newMenuItem(
        'Pad Thai', 
        '$15.00', 
        'Stir fried rice noodles etc.')

    newMenuItem('Gaeng Kiaw Wan', 
        '$17.00', 
        'Green curry with chicken and veg');

    pageContent.appendChild(menu);
}

export {renderMenu};