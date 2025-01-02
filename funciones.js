const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = 'https://cristianestmaida.github.io/Agenda-de-contactos/'
}

const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)

    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')
    let iconoEditar = document.createElement('span')

    if (contacto.nombre) {
        nombreContacto.innerHTML = contacto.nombre
    }
    else{
        nombreContacto.innerHTML = ""
    }
    
    if (contacto.numero) {
        numeroContacto.innerHTML = contacto.numero
    }
    else{
        numeroContacto.innerHTML = ""
    }

    if (contacto.direccion) {
        direccionContacto.innerHTML = contacto.direccion
    }
    else{
        direccionContacto.innerHTML = ""
    }
    
    iconoBorrar.innerHTML = 'delete_forever'
    iconoEditar.innerHTML = 'edit'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')
    iconoEditar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = 'https://cristianestmaida.github.io/Agenda-de-contactos/'
    }

    iconoEditar.onclick = () =>{
        const nombre = document.querySelector('.nombre');
        const numero = document.querySelector('.numero');
        const direccion = document.querySelector('.direccion');
        
        nombre.value = contacto.nombre;
        numero.value = contacto.numero;
        direccion.value = contacto.direccion;
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}
