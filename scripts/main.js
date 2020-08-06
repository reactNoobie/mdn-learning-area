const setNameInHeading = name => {
    document.querySelector('h1').innerText += `, ${name}!`;
}

const getName = () => {
    const name = prompt('Hi, you are?');
    if (name) {
        localStorage.setItem('name', name);
        setNameInHeading(name);
    } else {
        getName();
    }
}

const name = localStorage.getItem('name');
if (name) {
    setNameInHeading(name);
} else {
    getName();
}

document.querySelector('img').onclick = e => {
    const image = e.target;
    const imageSource = image.getAttribute('src');
    if (imageSource === 'images/firefox-icon.png') {
        image.setAttribute('src', 'images/firefox2.png');
    } else {
        image.setAttribute('src', 'images/firefox-icon.png');
    }
}
