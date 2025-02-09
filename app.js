var numeros = "0123456789";
let listaNombre = [];



function verificarEntrada(){
    let nombre = document.getElementById('entradaNombres').value;
    if (nombre === "" || verificarNumeros(nombre)){
        alert("Escriba un nombre válido para agregarlo.")
        document.getElementById('entradaNombres').value = "";
    }
    else {
        listaNombre.push(nombre)
        document.getElementById('entradaNombres').value = "";
        mostrarNombreEnLista()
        actualizarBotonElegir();
        return nombre;
    }
}

function mostrarNombreEnLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
    for (let i = 0; i< listaNombre.length; i++) {
        let amigo = listaNombre[i];
        let crearLista = document.createElement('li');
        crearLista.textContent = amigo;
        
        lista.appendChild(crearLista)
        console.log(listaNombre.length - 1)
        
    }
}

function verificarNumeros(texto){
for (let i= 0; i < texto.length; i++) {
    if (numeros.indexOf(texto.charAt(i), 0)!=-1) {
        return true;
    }
}
    return false; 
}

function elegirGanador() {
    let numRandom = Math.floor(Math.random()* listaNombre.length);
    console.log(numRandom)
    let ganador = listaNombre[numRandom];
    let titulo = document.getElementById('asd');


    titulo.innerHTML = `¡${ganador} ES EL ELEGIDO!`;
    console.log(listaNombre.length)
    console.log(ganador);
}

function actualizarBotonElegir() {
    let botonElegir = document.getElementById('ganador');

    if (listaNombre.length > 1) {  
        botonElegir.removeAttribute('disabled'); 
    } else {
        botonElegir.setAttribute('disabled', true); 
    }
}