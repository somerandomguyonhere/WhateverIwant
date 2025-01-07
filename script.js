let count = 0;
const counterElement = document.getElementById('counter');
const imageElement = document.getElementById('rockclicking');
let animationStarted = false; // Flag to track animation start

// Function to update the click counter and start animation if needed
imageElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    document.cookie = "clickCount=" + count + "; expires=Thu, 31 Dec 9999 23:59:59 UTC; path=/";

    if (count >= 30 && !animationStarted) {
        animationStarted = true; // Set the flag to true
        startBouncing(); //Starts the animation
    }
});


// Function to get a cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Set initial counter from cookie on load
window.onload = function() {
    let storedCount = getCookie("clickCount");
    if (storedCount) {
        count = parseInt(storedCount);
        counterElement.textContent = count;
        if (count >= 30) {
            animationStarted = true;
            startBouncing();
        }
    }
}

//Bouncing logic - this will only run if animationStarted is true
function startBouncing(){
    let posX = Math.random() * (window.innerWidth - 100); // Initial horizontal position
    let posY = Math.random() * (window.innerHeight - 100); // Initial vertical position
    let speedX = 2; // Horizontal speed
    let speedY = 2; // Vertical speed

    function animate() {
        // Move the image
        posX += speedX;
        posY += speedY;

        // Boundary collisions
        if (posX <= 0 || posX >= window.innerWidth - 100) {
            speedX = -speedX; // Reverse direction
        }
        if (posY <= 0 || posY >= window.innerHeight - 100) {
            speedY = -speedY; // Reverse direction
        }

        // Update image position
        imageElement.style.left = posX + 'px';
        imageElement.style.top = posY + 'px';

        requestAnimationFrame(animate);
    }

    animate();
}

