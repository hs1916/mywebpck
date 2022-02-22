import './app.css';
import nyangcat from './nyancat.jpeg';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `
        <img src="${nyangcat}" />
    `
})