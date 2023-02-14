// primero el template(1) y despues el fragment(2)
// Modificamos el template (3) hacemos un clon (4)
// agregar al fragment y luego se agrega a la lista

const lista = document.querySelector('#lista')
const arrayLista = ['Item 1','Item 2','Item 3']
//1
const template = document.querySelector('#template-li').content
//2
const fragment = document.createDocumentFragment()

arrayLista.forEach(item => {
    template.querySelector('.text-danger').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)

