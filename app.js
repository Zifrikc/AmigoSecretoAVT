// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

let texto = "";

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre && !listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    } else {
        alert("El nombre ya está en la lista o está vacío.");
    }console.log(listaAmigos);
return listaAmigos;
}


function mostrarAmigos2(elemento, amigo) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = amigo;
    return;
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
        
    });
    return lista;
}
function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }
    let amigo = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    mostrarAmigos2("li", `El amigo secreto es: ${amigo}`);

    return amigo;
}

