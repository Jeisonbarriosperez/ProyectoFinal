// Datos de la cartelera
var cartelera = [
    {
        sala: 'Sala 1',
        horario: '15:00',
        pelicula: 'Spider-Man: No Way Home',
        fechaInicio: '2023-06-15',
        fechaFinalizacion: '2023-06-30'
    },
    {
        sala: 'Sala 2',
        horario: '18:30',
        pelicula: 'Black Widow',
        fechaInicio: '2023-06-10',
        fechaFinalizacion: '2023-06-25'
    },
    {
        sala: 'Sala 3',
        horario: '21:00',
        pelicula: 'Fast & Furious 10',
        fechaInicio: '2023-06-20',
        fechaFinalizacion: '2023-07-05'
    }
];

// Función para mostrar la cartelera en la tabla
function mostrarCartelera() {
    var tabla = document.getElementById('cartelera');

    cartelera.forEach(function (pelicula) {
        var fila = document.createElement('tr');
        var salaColumna = document.createElement('td');
        salaColumna.textContent = pelicula.sala;
        fila.appendChild(salaColumna);
        var horarioColumna = document.createElement('td');
        horarioColumna.textContent = pelicula.horario;
        fila.appendChild(horarioColumna);
        var peliculaColumna = document.createElement('td');
        peliculaColumna.textContent = pelicula.pelicula;
        fila.appendChild(peliculaColumna);
        var fechaInicioColumna = document.createElement('td');
        fechaInicioColumna.textContent = pelicula.fechaInicio;
        fila.appendChild(fechaInicioColumna);
        var fechaFinalizacionColumna = document.createElement('td');
        fechaFinalizacionColumna.textContent = pelicula.fechaFinalizacion;
        fila.appendChild(fechaFinalizacionColumna);

        // Botón de selección de película
        var seleccionarColumna = document.createElement('td');
        var seleccionarBoton = document.createElement('button');
        seleccionarBoton.textContent = 'Seleccionar';
        seleccionarBoton.addEventListener('click', function () {
            seleccionarPelicula(pelicula);
        });
        seleccionarColumna.appendChild(seleccionarBoton);
        fila.appendChild(seleccionarColumna);

        tabla.appendChild(fila);
    });
}

// Función para seleccionar una película y mostrarla en la consola
function seleccionarPelicula(pelicula) {
    console.log('Película seleccionada:', pelicula);
    // Agregar la película seleccionada al array de selección (puedes hacerlo a tu conveniencia)
    // ...
    // Actualizar la tabla de selección si es necesario
    // ...
}
// Llamar a la función para mostrar la cartelera al cargar la página
// Función para mostrar la película seleccionada en la tabla correspondiente
function mostrarPeliculaSeleccionada(pelicula) {
    var tabla = document.getElementById('peliculaSeleccionada');
    tabla.innerHTML = '';

    var fila = document.createElement('tr');
    var salaColumna = document.createElement('td');
    salaColumna.textContent = pelicula.sala;
    fila.appendChild(salaColumna);
    var horarioColumna = document.createElement('td');
    horarioColumna.textContent = pelicula.horario;
    fila.appendChild(horarioColumna);
    var peliculaColumna = document.createElement('td');
    peliculaColumna.textContent = pelicula.pelicula;
    fila.appendChild(peliculaColumna);
    var fechaInicioColumna = document.createElement('td');
    fechaInicioColumna.textContent = pelicula.fechaInicio;
    fila.appendChild(fechaInicioColumna);
    var fechaFinalizacionColumna = document.createElement('td');
    fechaFinalizacionColumna.textContent = pelicula.fechaFinalizacion;
    fila.appendChild(fechaFinalizacionColumna);

    tabla.appendChild(fila);
}

// Función para seleccionar una película y mostrarla en la tabla correspondiente
function seleccionarPelicula(pelicula) {
    console.log('Película seleccionada:', pelicula);
    mostrarPeliculaSeleccionada(pelicula);
}

// Llamar a la función para mostrar la cartelera al cargar la página
mostrarCartelera();