// Datos de la cartelera
var cartelera = [];

// Función para mostrar la cartelera en la tabla
function mostrarCartelera() {
  var tabla = document.getElementById('cartelera');
  tabla.innerHTML = '';

  cartelera.forEach(function(pelicula) {
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
  });
}

// Función para agregar una película a la cartelera
function agregarPelicula(event) {
  event.preventDefault();

  var sala = document.getElementById('sala').value;
  var horario = document.getElementById('horario').value;
  var pelicula = document.getElementById('pelicula').value;
  var fechaInicio = document.getElementById('fechaInicio').value;
  var fechaFinalizacion = document.getElementById('fechaFinalizacion').value;

  var nuevaPelicula = {
    sala: sala,
    horario: horario,
    pelicula: pelicula,
    fechaInicio: fechaInicio,
    fechaFinalizacion: fechaFinalizacion
  };

  cartelera.push(nuevaPelicula);
  mostrarCartelera();
  limpiarFormulario();
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
  document.getElementById('sala').value = '';
  document.getElementById('horario').value = '';
  document.getElementById('pelicula').value = '';
  document.getElementById('fechaInicio').value = '';
  document.getElementById('fechaFinalizacion').value = '';
}

// Llamar a la función para mostrar la cartelera al cargar la página
mostrarCartelera();

// Agregar un evento de envío del formulario para agregar una nueva película
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', agregarPelicula);
// Función para agregar una película a la cartelera
function agregarPelicula(event) {
  event.preventDefault();

  var sala = document.getElementById('sala').value;
  var horario = document.getElementById('horario').value;
  var pelicula = document.getElementById('pelicula').value;
  var fechaInicio = document.getElementById('fechaInicio').value;
  var fechaFinalizacion = document.getElementById('fechaFinalizacion').value;

  var nuevaPelicula = {
    sala: sala,
    horario: horario,
    pelicula: pelicula,
    fechaInicio: fechaInicio,
    fechaFinalizacion: fechaFinalizacion
  };

  cartelera.push(nuevaPelicula);

  // Imprimir el arreglo cartelera en la consola
  console.log(cartelera);

  mostrarCartelera();
  limpiarFormulario();
}
