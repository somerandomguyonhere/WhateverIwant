let count = 0;
const counterElement = document.getElementById('counter');
const imageElement = document.getElementById('rockclicking');

imageElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    document.cookie = "clickCount=" + count + "; expires=Thu, 31 Dec 9999 23:59:59 UTC; path=/";
    if (count >= 1000) {
        startBouncing();
    } else if (count < 1000 && bouncingInterval) {
        clearInterval(bouncingInterval);
        bouncingInterval = null;
        imageElement.style.position = 'static'; // reset position
        imageElement.style.left = '0';
        imageElement.style.top = '0';
    }
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// get counter from cookie
window.onload = function() {
    let storedCount = getCookie("clickCount");
    if (storedCount) {
        count = parseInt(storedCount);
        counterElement.textContent = count;
        if (count >= 1000) {
            startBouncing();
        }
    }
};

let bouncingInterval = null;

function startBouncing() {
    if (bouncingInterval) return; // Already bouncing
    imageElement.style.position = 'absolute';
    bouncingInterval = setInterval(() => {
        const maxX = window.innerWidth - imageElement.offsetWidth;
        const maxY = window.innerHeight - imageElement.offsetHeight;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
        imageElement.style.left = newX + 'px';
        imageElement.style.top = newY + 'px';
    }, 50); // Adjust interval for bouncing speed
}
