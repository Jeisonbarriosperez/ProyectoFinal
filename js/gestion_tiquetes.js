document.getElementById('ventaForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener los valores de los campos
  var cliente = document.getElementById('cliente').value;
  var sala = document.getElementById('sala').value;
  var horario = document.getElementById('horario').value;
  var numeroTiquetes = parseInt(document.getElementById('numeroTiquetes').value);
  var formaPago = document.getElementById('formaPago').checked;
  var tarjeta = document.getElementById("tarjeta").value;
 
  var fechaVenta = new Date();

  // Generar posiciones de asiento
  var asientos = [];
  for (var i = 1; i <= numeroTiquetes; i++) {
    asientos.push(i);
  }

  // Mostrar los resultados
  console.log('Cliente:', cliente);
  console.log('Sala:', sala);
  console.log('Horario:', horario);
  console.log('Número de tiquetes:', numeroTiquetes);
  console.log('Posiciones de asiento:', asientos);
  console.log('Forma de pago en línea:', formaPago ? 'Sí' : 'No');
  console.log('Tarjeta:', tarjeta);
  console.log('Fecha de venta:', fechaVenta);
  document.getElementById('cliente').value = '';
  document.getElementById('sala').value = '';
  document.getElementById('horario').value = '';
  document.getElementById('numeroTiquetes').value = '';
  document.getElementById('formaPago').checked = false;
  document.getElementById('tarjeta').value = '';
  document.getElementById('fechaCreacion').value = '';
  document.getElementById('fechaModificacion').value = '';

  // Guardar los datos en el almacenamiento local
  localStorage.setItem('cliente', cliente);
  localStorage.setItem('sala', sala);
  localStorage.setItem('horario', horario);
  localStorage.setItem('numeroTiquetes', numeroTiquetes);
  localStorage.setItem('formaPago', formaPago);
  localStorage.setItem('tarjeta', tarjeta);
  localStorage.setItem('fechaVenta', fechaVenta);
});

// Obtener referencia al botón de consulta
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia al botón de consulta
  const consultarBtn = document.getElementById("consultarBtn");

  // Manejar el evento de clic en el botón "Consultar"
  consultarBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los datos guardados del almacenamiento local
    var sala = localStorage.getItem('sala');
    var horario = localStorage.getItem('horario');
    var numeroTiquetes = localStorage.getItem('numeroTiquetes');
    var formaPago = localStorage.getItem('formaPago');
    var tarjeta = localStorage.getItem('tarjeta');
    var cliente = localStorage.getItem('cliente');
    var fechaVenta = localStorage.getItem('fechaVenta');

    // Mostrar los datos guardados en los campos correspondientes
    document.getElementById("sala").value = sala;
    document.getElementById("horario").value = horario;
    document.getElementById("numeroTiquetes").value = numeroTiquetes;
    document.getElementById("formaPago").checked = formaPago === "true";
    document.getElementById("tarjeta").value = tarjeta;
    document.getElementById("cliente").value = cliente;
    document.getElementById("fechaCreacion").value = fechaVenta;
    document.getElementById("fechaModificacion").value = fechaVenta;
  });
});

