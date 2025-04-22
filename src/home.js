import restaurantImage from "./restaurant.jpg";

export default function loadHome() {
    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear existing content

    const homeSection = document.createElement('section');
    homeSection.id = 'home';

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'A beautiful view of the restaurant';
    img.style.width = '100%';
    img.style.height = 'auto';

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Lalla';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the finest dining with a blend of exquisite flavors and a warm, inviting atmosphere. At Lalla, we take pride in serving you the best culinary delights crafted with love and passion.';

    homeSection.appendChild(img);
    homeSection.appendChild(heading);
    homeSection.appendChild(paragraph);

    content.appendChild(homeSection);
}