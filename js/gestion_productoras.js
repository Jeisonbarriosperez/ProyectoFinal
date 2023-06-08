// Array para almacenar las productoras
const productoras = [];

// Función para generar un código único para cada productora
function generarCodigo() {
    return Math.random().toString(36).substr(2, 9);
}

// Función para agregar un teléfono a la lista
function agregarTelefono() {
    const telefonosList = document.getElementById('telefonosList');
    const newLi = document.createElement('li');
    newLi.innerHTML = '<input type="text" class="telefono" required>';
    telefonosList.appendChild(newLi);
}

// Función para agregar un celular a la lista
function agregarCelular() {
    const celularesList = document.getElementById('celularesList');
    const newLi = document.createElement('li');
    newLi.innerHTML = '<input type="text" class="celular" required>';
    celularesList.appendChild(newLi);
}

// Función para guardar una productora
function guardarProductora(event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const telefonosInputList = document.querySelectorAll('.telefono');
    const celularesInputList = document.querySelectorAll('.celular');
    const correo = document.getElementById('correo').value;
    const representante = document.getElementById('representante').value;

    // Generar un código único para la productora
    const codigo = generarCodigo();

    // Crear un objeto con los datos de la productora
    const productora = {
        codigo: codigo,
        nombre: nombre,
        pais: pais,
        telefonos: [],
        celulares: [],
        correo: correo,
        representante: representante
    };

    // Agregar los teléfonos a la lista de la productora
    telefonosInputList.forEach(input => {
        const telefono = input.value;
        productora.telefonos.push(telefono);
    });

    // Agregar los celulares a la lista de la productora
    celularesInputList.forEach(input => {
        const celular = input.value;
        productora.celulares.push(celular);
    });

    // Agregar la productora al array de productoras
    productoras.push(productora);

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('pais').value = '';
    telefonosInputList.forEach(input => input.value = '');
    celularesInputList.forEach(input => input.value = '');
    document.getElementById('correo').value = '';
    document.getElementById('representante').value = '';

    // Actualizar la tabla de productoras
    actualizarTablaProductoras();

    console.log('Productora guardada:', productora);
}

// Función para actualizar la tabla de productoras
function actualizarTablaProductoras() {
    const productorasTableBody = document.getElementById('productorasTableBody');
    productorasTableBody.innerHTML = '';

    productoras.forEach(productora => {
        const row = document.createElement('tr');

        const codigoCell = document.createElement('td');
        codigoCell.textContent = productora.codigo;
        row.appendChild(codigoCell);

        const nombreCell = document.createElement('td');
        nombreCell.textContent = productora.nombre;
        row.appendChild(nombreCell);

        const paisCell = document.createElement('td');
        paisCell.textContent = productora.pais;
        row.appendChild(paisCell);

        const telefonosCell = document.createElement('td');
        const telefonosList = document.createElement('ul');
        productora.telefonos.forEach(telefono => {
            const telefonoItem = document.createElement('li');
            telefonoItem.textContent = telefono;
            telefonosList.appendChild(telefonoItem);
        });
        telefonosCell.appendChild(telefonosList);
        row.appendChild(telefonosCell);

        const celularesCell = document.createElement('td');
        const celularesList = document.createElement('ul');
        productora.celulares.forEach(celular => {
            const celularItem = document.createElement('li');
            celularItem.textContent = celular;
            celularesList.appendChild(celularItem);
        });
        celularesCell.appendChild(celularesList);
        row.appendChild(celularesCell);

        const correoCell = document.createElement('td');
        correoCell.textContent = productora.correo;
        row.appendChild(correoCell);

        const representanteCell = document.createElement('td');
        representanteCell.textContent = productora.representante;
        row.appendChild(representanteCell);

        productorasTableBody.appendChild(row);
    });
}
function agregarTelefono() {
    const telefonosList = document.getElementById('telefonosList');
    const newLi = document.createElement('li');
    newLi.innerHTML = '<input type="text" class="telefono" required>';
    telefonosList.appendChild(newLi);
}

