const criatrem = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' },
];

const section = document.querySelector('.container');
let div = document.createElement('div');

for (let i = 0; i < criatrem.length; i++) {
    let { tag, texto } = criatrem[i];
    let tagcriada = document.createElement(tag);
    tagcriada.innerHTML = texto;
    div.appendChild(tagcriada);
}

section.appendChild(div);