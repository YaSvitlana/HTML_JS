const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.innerText = 'Hello World';


const cloneNode = div.cloneNode(true);

document.body.append(div, cloneNode);
