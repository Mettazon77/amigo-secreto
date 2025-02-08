var numeros = "0123456789";
let listaNombre = [];


function verificarEntrada(){
    let nombre = document.getElementById('entradaNombres').value;
    if (nombre === "" || verificarNumeros(nombre) ==1){
        alert("Escriba un nombre válido para agregarlo.")
        document.getElementById('entradaNombres').value = "";
    }
    else {
        listaNombre.push(nombre)
        document.getElementById('entradaNombres').value = "";
        mostrarNombreEnLista()
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
