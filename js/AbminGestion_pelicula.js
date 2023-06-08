// Array para almacenar las películas
let peliculas = [];

// Obtener referencias a los elementos del formulario
const codigoInput = document.getElementById("codigo");
const nombreOriginalInput = document.getElementById("nombreOriginal");
const generoSelect = document.getElementById("genero");
const nuevoGeneroInput = document.getElementById("nuevoGenero");
const idiomaOriginalInput = document.getElementById("idiomaOriginal");
const subtitulosInput = document.getElementById("subtitulosInput");
const duracionSpan = document.getElementById("duracion");
const actorPrincipalInput = document.getElementById("actorPrincipal");
const actorSecundarioInput = document.getElementById("actorSecundario");
const numAfichesInput = document.getElementById("numAfiches");
const numCopiasInput = document.getElementById("numCopias");
const productoraInput = document.getElementById("productora");

// Agregar un género nuevo al combo de géneros

// Agregar subtítulos a la lista
function agregarSubtitulos() {
    const subtitulosInputValue = subtitulosInput.value.trim();
    if (subtitulosInputValue !== "") {
        const subtitulos = subtitulosInputValue.split(",").map(subtitulo => subtitulo.trim());
        const listaSubtitulos = document.getElementById("listaSubtitulos");
        listaSubtitulos.innerHTML = "";
        subtitulos.forEach(subtitulo => {
            const li = document.createElement("li");
            li.textContent = subtitulo;
            listaSubtitulos.appendChild(li);
        });
        subtitulosInput.value = "";
    }
}
// Generar una duración aleatoria
function generarDuracion() {
    const horas = Math.floor(Math.random() * 3) + 1;
    const minutos = Math.floor(Math.random() * 60);
    const segundos = Math.floor(Math.random() * 60);
    return `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}
window.addEventListener("DOMContentLoaded", generarDuracion);

// Agregar un actor principal a la lista
function agregarActorPrincipal() {
    const actorPrincipal = actorPrincipalInput.value.trim();
    if (actorPrincipal !== "") {
        const listaActoresPrincipales = document.getElementById("listaActoresPrincipales");
        const li = document.createElement("li");
        li.textContent = actorPrincipal;
        listaActoresPrincipales.appendChild(li);
        actorPrincipalInput.value = "";
    }
}

// Agregar un actor secundario a la lista
function agregarActorSecundario() {
    const actorSecundario = actorSecundarioInput.value.trim();
    if (actorSecundario !== "") {
        const listaActoresSecundarios = document.getElementById("listaActoresSecundarios");
        const li = document.createElement("li");
        li.textContent = actorSecundario;
        listaActoresSecundarios.appendChild(li);
        actorSecundarioInput.value = "";
    }
}

// Guardar los datos de la película
function guardarPelicula() {
    const generoSeleccionado = generoSelect.value;
    const nuevoGenero = nuevoGeneroInput.value.trim();
    const genero = generoSeleccionado !== "" ? generoSeleccionado : nuevoGenero;
    const subtitulos = Array.from(document.querySelectorAll("#listaSubtitulos li")).map(li => li.textContent);
    const pelicula = {
        codigo: codigoInput.value.trim(),
        nombreOriginal: nombreOriginalInput.value.trim(),
        genero: genero,
        idiomaOriginal: idiomaOriginalInput.value.trim(),
        subtitulos: subtitulos,
        duracion: generarDuracion(),
        actoresPrincipales: Array.from(document.querySelectorAll("#listaActoresPrincipales li")).map(li => li.textContent),
        actoresSecundarios: Array.from(document.querySelectorAll("#listaActoresSecundarios li")).map(li => li.textContent),
        numAfiches: parseInt(numAfichesInput.value),
        numCopias: parseInt(numCopiasInput.value),
        productora: productoraInput.value.trim()
    };

    peliculas.push(pelicula);
    console.log("Película guardada:", pelicula);

    // Limpiar los campos del formulario
    codigoInput.value = "";
    nombreOriginalInput.value = "";
    generoSelect.value = "";
    nuevoGeneroInput.value = "";
    idiomaOriginalInput.value = "";
    subtitulosInput.value = "";
    document.getElementById("listaSubtitulos").innerHTML = "";
    duracionSpan.textContent = "";
    actorPrincipalInput.value = "";
    document.getElementById("listaActoresPrincipales").innerHTML = "";
    actorSecundarioInput.value = "";
    document.getElementById("listaActoresSecundarios").innerHTML = "";
    numAfichesInput.value = "";
    numCopiasInput.value = "";
    productoraInput.value = "";
}

// Consultar una película por su código
document.getElementById("consultar").addEventListener("click", function () {
    const codigoConsulta = codigoInput.value.trim();
    const peliculaConsultada = peliculas.find(pelicula => pelicula.codigo === codigoConsulta);
    if (peliculaConsultada) {
        nombreOriginalInput.value = peliculaConsultada.nombreOriginal;
        generoSelect.value = peliculaConsultada.genero;
        idiomaOriginalInput.value = peliculaConsultada.idiomaOriginal;
        subtitulosInput.value = peliculaConsultada.subtitulos.join(", ");
        const listaSubtitulos = document.getElementById("listaSubtitulos");
        listaSubtitulos.innerHTML = "";
        peliculaConsultada.subtitulos.forEach(subtitulo => {
            const li = document.createElement("li");
            li.textContent = subtitulo;
            listaSubtitulos.appendChild(li);
        });
        duracionSpan.textContent = peliculaConsultada.duracion;
        peliculaConsultada.actoresPrincipales.forEach(actor => {
            const li = document.createElement("li");
            li.textContent = actor;
            document.getElementById("listaActoresPrincipales").appendChild(li);
        });
        peliculaConsultada.actoresSecundarios.forEach(actor => {
            const li = document.createElement("li");
            li.textContent = actor;
            document.getElementById("listaActoresSecundarios").appendChild(li);
        });
        numAfichesInput.value = peliculaConsultada.numAfiches;
        numCopiasInput.value = peliculaConsultada.numCopias;
        productoraInput.value = peliculaConsultada.productora;
    } else {
        alert("No se encontró una película con el código especificado");
    }
});


