
const theHide = document.querySelector("#MenuButton");

function toggleMenu() {
    const menu = document.getElementById("menuItems");
    menu.classList.toggle("hide");
}

theHide.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector("menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    let clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
        let clickedAttribute = clickedElement.getAttribute('src');
        let srcParts = clickedAttribute.split('-');
        let fullImageFileName = srcParts[0] + '-full.jpeg';
        let viewerDiv = viewerTemplate(fullImageFileName, clickedElement.alt);
        document.body.insertAdjacentHTML('afterbegin', viewerDiv);
        let closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}

function closeViewer() {
    let viewerDiv = document.querySelector('.viewer');
    viewerDiv.remove();
}

document.querySelector('gallery').addEventListener('click', viewHandler);