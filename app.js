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
        let item = document.createElement("ul");
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
    mostrarAmigos2("ul", `El amigo secreto es: ${amigo}`);
    limpiarLista();
    return amigo;
}

function limpiarLista() {
    document.querySelector('#resultado').value = '';
}


/* spinnerFlanders */
const progress = document.querySelector('.progress');
const audio = document.getElementById('loading-audio');
const loadingText = document.querySelector('.loading-text');

document.addEventListener('click', async () => {
    try {
        await audio.play(); // Intentar reproducir el audio
        
        // Cambiar el mensaje y empezar la animación de carga
        loadingText.textContent = "Loading...";
        progress.style.width = '100%';

        // Redirigir después de que el audio comience a reproducirse
        setTimeout(() => {
            window.location.href = 'Home.html';
        }, 9000);
        
    } catch (error) {
        console.error("Error al reproducir el audio:", error);
        loadingText.textContent = "Por favor, permite la reproducción de audio.";
    }
}, { once: true }); // Ejecutar solo una vez
