// Factory function to create a menu card
function createMenuCard(name, description, price) {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = name;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    const cardPrice = document.createElement('p');
    cardPrice.textContent = price;
    cardPrice.classList.add('menu-price');

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardPrice);

    return card;
}

export default function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear existing content

    const menuSection = document.createElement('section');
    menuSection.id = 'menu';

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const items = [
        { name: 'Salade Cesare', description: 'A delicious starter to begin your meal.', price: '$10' },
        { name: 'Paila', description: 'A hearty main course to satisfy your hunger.', price: '$20' },
        { name: 'Tiramisu', description: 'A sweet dessert to end your meal.', price: '$8' },
    ];

    // Use the factory function to create and append cards
    items.forEach(item => {
        const card = createMenuCard(item.name, item.description, item.price);
        menuGrid.appendChild(card);
    });

    menuSection.appendChild(heading);
    menuSection.appendChild(menuGrid);

    content.appendChild(menuSection);
}