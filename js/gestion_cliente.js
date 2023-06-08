

function agregarRedSocial() {
    var redSocial = document.getElementById('redSocial').value;

    if (redSocial !== '') {
        var listaRedesSociales = document.getElementById('listaRedesSociales');
        var nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = redSocial;
        listaRedesSociales.appendChild(nuevoElemento);
        document.getElementById('redSocial').value = '';
    }
}
function validarDireccion() {
    var direccionInput = document.getElementById("direccion");
    var direccionValue = direccionInput.value.trim();

    // Verificar si la dirección contiene calle, carrera, manzana y barrio
    if (direccionValue.includes("calle") && direccionValue.includes("carrera") && direccionValue.includes("manzana") && direccionValue.includes("barrio")) {
        return true; // La dirección es válida
    } else {
        alert("La dirección ingresada no es válida. Asegúrate de incluir 'calle', 'carrera', 'manzana' y 'barrio' en el formato correcto.");
        return false; // Detener el envío del formulario
    }
}
// Variable para almacenar los clientes
var clientes = [];
// Función para guardar los datos del cliente
function guardarCliente(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados en el formulario
    var id = document.getElementById("id").value;
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var sexo = document.getElementById("sexo").value;
    var redesSociales = obtenerRedesSociales();

    // Crear un objeto con los datos del cliente
    var cliente = {
        id: id,
        nombreCompleto: nombreCompleto,
        correoElectronico: correoElectronico,
        telefono: telefono,
        direccion: direccion,
        fechaNacimiento: fechaNacimiento,
        sexo: sexo,
        redesSociales: redesSociales
    };

    // Agregar el cliente al array de clientes
    clientes.push(cliente);

    // Limpiar el formulario
    document.getElementById("formularioCliente").reset();

    console.log(clientes); // Mostrar los clientes en la consola
}

// Función para obtener las redes sociales ingresadas
function obtenerRedesSociales() {
    var redesSociales = [];
    var listaRedesSociales = document.getElementById("listaRedesSociales").getElementsByTagName("li");

    for (var i = 0; i < listaRedesSociales.length; i++) {
        redesSociales.push(listaRedesSociales[i].innerText);
    }

    return redesSociales;
}

// Asignar la función guardarCliente al evento click del botón "Guardar"
document.getElementById("btnGuardar").addEventListener("click", guardarCliente);

// Función para consultar un cliente por su ID
function consultarCliente() {
    var id = document.getElementById("id").value; // Obtener el ID ingresado

    // Buscar el cliente en el array de clientes por su ID
    var clienteEncontrado = clientes.find(function (cliente) {
        return cliente.id === id;
    });

    if (clienteEncontrado) {
        // Rellenar los campos del formulario con los datos del cliente encontrado
        document.getElementById("nombreCompleto").value = clienteEncontrado.nombreCompleto;
        document.getElementById("correoElectronico").value = clienteEncontrado.correoElectronico;
        document.getElementById("telefono").value = clienteEncontrado.telefono;
        document.getElementById("direccion").value = clienteEncontrado.direccion;
        document.getElementById("fechaNacimiento").value = clienteEncontrado.fechaNacimiento;
        document.getElementById("sexo").value = clienteEncontrado.sexo;

        // Rellenar las redes sociales del cliente encontrado
        var listaRedesSociales = document.getElementById("listaRedesSociales");
        listaRedesSociales.innerHTML = ""; // Limpiar la lista de redes sociales

        clienteEncontrado.redesSociales.forEach(function (redSocial) {
            var li = document.createElement("li");
            li.innerText = redSocial;
            listaRedesSociales.appendChild(li);
        });
    } else {
        // Cliente no encontrado, limpiar los campos del formulario
        document.getElementById("nombreCompleto").value = "";
        document.getElementById("correoElectronico").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("fechaNacimiento").value = "";
        document.getElementById("sexo").value = "";
        document.getElementById("listaRedesSociales").innerHTML = "";
    }
}


