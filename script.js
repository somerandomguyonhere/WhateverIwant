let count = 0;
const counterElement = document.getElementById('counter');
const imageElement = document.getElementById('rockclicking');

imageElement.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    document.cookie = "clickCount=" + count + "; expires=Thu, 31 Dec 9999 23:59:59 UTC; path=/";

    if (count >= 1000) {
        imageElement.classList.add('spinning');
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
            imageElement.classList.add('spinning');
        }
    }
};
