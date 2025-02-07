let indicador = document.getElementById('asd');
let listaNombre = []

function agregarNombre() {
    let divLista = document.getElementById('lista');
    let nombre = document.getElementById('entradaNombres').value;
    let parrafoNombre = document.createElement('p');
    parrafoNombre.innerHTML = nombre
    divLista.appendChild(parrafoNombre);

    return nombre;
}

console.log(agregarNombre());