 const lista = document.getElementById('lista')

 const arrayLista = ['Item 1','Item 2','Item 3']
 const fragment = document.createDocumentFragment()
 arrayLista.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list')
    const b = document.createElement('b')
    b.textContent = 'nombre: '
    li.appendChild(b)
    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = item
    li.appendChild(span)
    fragment.appendChild(li)
 })

 lista.appendChild(fragment)