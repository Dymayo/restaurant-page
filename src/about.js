export default function loadAbout() {
    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear existing content

    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lalla is a family-owned restaurant that has been serving delicious meals for over 20 years. Our mission is to provide an unforgettable dining experience.';

    aboutSection.appendChild(heading);
    aboutSection.appendChild(paragraph);

    content.appendChild(aboutSection);
}