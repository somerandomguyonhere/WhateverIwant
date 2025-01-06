let count = 0; 

const counterElement = document.getElementById('counter');
const imageElement = document.getElementById('rockclicking');

imageElement.addEventListener('click', () => {
    count++; 
    counterElement.textContent = count; 
});
