function validarCompra(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores ingresados por el usuario
  const numero = document.getElementById('numero').value;
  const sucursal = document.getElementById('sucursal').value;
  const peliculasInputList = document.querySelectorAll('.pelicula');
  const peliculas = [];
  peliculasInputList.forEach((input) => {
    peliculas.push(input.value);
  });
  const cantidades = document.getElementById('cantidades').value;
  const precio = document.getElementById('precio').value;
  const subtotal = cantidades * precio;
  const total = subtotal;
  const fecha = document.getElementById('fecha').value;

  // Realizar las validaciones
  if (numero === '') {
    console.log('Por favor, ingresa el número de compra.');
    return;
  }

  if (sucursal === '') {
    console.log('Por favor, ingresa el nombre de la sucursal.');
    return;
  }

  if (peliculas.length === 0) {
    console.log('Por favor, ingresa al menos una película.');
    return;
  }

  if (cantidades <= 0) {
    console.log('Por favor, ingresa una cantidad válida.');
    return;
  }

  if (precio <= 0) {
    console.log('Por favor, ingresa un precio válido.');
    return;
  }

  // Si todas las validaciones pasan, puedes realizar otras acciones aquí

  // Por ejemplo, puedes crear un objeto con los datos de la compra:
  const compra = {
    numero: numero,
    sucursal: sucursal,
    peliculas: peliculas,
    cantidades: cantidades,
    precio: precio,
    subtotal: subtotal,
    total: total,
    fecha: fecha
  };

  // Mostrar los datos de compra en la consola
  console.log('Datos de la compra:');
  console.log('Número:', compra.numero);
  console.log('Sucursal:', compra.sucursal);
  console.log('Películas:');
  peliculas.forEach((pelicula, index) => {
    console.log(`Película ${index + 1}: ${pelicula}`);
  });
  console.log('Cantidad:', compra.cantidades);
  console.log('Precio:', compra.precio);
  console.log('Subtotal:', compra.subtotal);
  console.log('Total:', compra.total);
  console.log('Fecha:', compra.fecha);
}

function agregarPelicula() {
  const peliculasList = document.getElementById('peliculasList');
  const newLi = document.createElement('li');
  newLi.innerHTML = '<input type="text" class="pelicula" required>';
  peliculasList.appendChild(newLi);
}
