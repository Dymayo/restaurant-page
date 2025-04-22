import "./styles.css";
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';


function init() {
    const homeTab = document.querySelector('#home-tab');
    const menuTab = document.querySelector('#menu-tab');
    const aboutTab = document.querySelector('#about-tab');

    // Event listeners for tab switching
    homeTab.addEventListener('click', loadHome);
    menuTab.addEventListener('click', loadMenu);
    aboutTab.addEventListener('click', loadAbout);

    // Load the home tab by default
    loadHome();
}

document.addEventListener('DOMContentLoaded', init);