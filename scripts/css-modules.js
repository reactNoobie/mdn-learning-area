document.querySelector('#show-absolute-element').onclick = () => {
    const absoluteElement = document.querySelector('#absolute-element-example');
    absoluteElement.style.display = 'block';
    absoluteElement.scrollIntoView();
}

document.querySelector('#hide-absolute-element').onclick = () => {
    document.querySelector('#absolute-element-example').style.display = 'none';
}

const stickyElement = document.querySelector('#sticky-example');
document.querySelector('#show-sticky').onclick = () => stickyElement.style.display = 'block';
document.querySelector('#hide-sticky').onclick = () => stickyElement.style.display = 'none';