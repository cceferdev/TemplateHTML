//EL INNERHTML NO acepta el fragment
//entonces se usaria let fragment como alternativa al documentfragment

const lista = document.querySelector('#lista')
const arrayLista = ['Item 1','Item 2','Item 3']


let fragment = ''
arrayLista.forEach(item => {
    fragment += `
    <li class="list">
    <b> Nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `
})

lista.innerHTML = fragment