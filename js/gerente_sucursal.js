// Array para almacenar las sucursales
var sucursales = [];

// Función para validar el código
function validarCodigo(codigo) {
    // Expresión regular para validar el código (solo letras y números)
    var regexCodigo = /^[A-Za-z0-9]+$/;
    return regexCodigo.test(codigo);
}

// Evento para mostrar los valores al hacer clic en "Consultar"
document.getElementById("guardar").addEventListener("click", function () {
    var codigoValue = document.getElementById("codigo").value;
    var direccionValue = document.getElementById("direccion").value;
    var departamentoValue = document.getElementById("departamento").value;
    var ciudadValue = document.getElementById("ciudad").value;
    var gerenteValue = document.getElementById("gerente").value;
    var salasValue = document.getElementById("salas").value;
    var trabajadoresValue = document.getElementById("trabajadores").value;
    var cafeteriaChecked = document.getElementById("cafeteria").checked;

    console.log("Código: " + codigoValue);
    console.log("Dirección: " + direccionValue);
    console.log("Departamento: " + departamentoValue);
    console.log("Ciudad: " + ciudadValue);
    console.log("Gerente: " + gerenteValue);
    console.log("Salas: " + salasValue);
    console.log("Trabajadores: " + trabajadoresValue);
    console.log("Cafetería: " + cafeteriaChecked);

});

// Evento para guardar los valores al enviar el formulario
document.getElementById("sucursalForm").addEventListener("submit", function (event) {
    event.preventDefault();


    // Obtener los valores ingresados por el usuario
    var codigo = document.getElementById("codigo").value;
    var direccion = document.getElementById("direccion").value;
    var departamento = document.getElementById("departamento").value;
    var ciudad = document.getElementById("ciudad").value;
    var gerente = document.getElementById("gerente").value;
    var salas = document.getElementById("salas").value;
    var trabajadores = document.getElementById("trabajadores").value;
    var cafeteria = document.getElementById("cafeteria").checked;


    // Validar el código
    if (!validarCodigo(codigo)) {
        alert("El código ingresado no es válido. Por favor, ingresa solo letras y números.");
        return;
    }

    // Crear un objeto con los valores ingresados
    var sucursal = {
        codigo: codigo,
        direccion: direccion,
        departamento: departamento,
        ciudad: ciudad,
        gerente: gerente,
        salas: salas,
        trabajadores: trabajadores,
        cafeteria: cafeteria
    };


    // Agregar el objeto al array de sucursales
    sucursales.push(sucursal);

    // Mostrar el array en la consola
    console.log(sucursales);

});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos del formulario
    var departamentoSelect = document.getElementById("departamento");
    var ciudadSelect = document.getElementById("ciudad");

    // Definir las ciudades por departamento
    var ciudadesPorDepartamento = {
        Amazonas: ["Leticia", "Puerto Nariño"],
        Antioquia: ["Medellín", "Envigado", "Itagüí"],
        Arauca: ["Arauca", "Saravena"],
        Atlántico: ["Barranquilla", "Soledad", "Malambo"],
        Bogotá_D_C: ["Bogotá"],
        Bolívar: ["Cartagena", "Barrancabermeja", "Magangué"],
        Boyacá: ["Tunja", "Duitama", "Sogamoso"],
        Caldas: ["Manizales", "Villamaría", "Chinchiná"],
        Caquetá: ["Florencia", "San Vicente del Caguán", "Puerto Rico"],
        Casanare: ["Yopal", "Aguazul", "Villanueva"],
        Cauca: ["Popayán", "Santander de Quilichao", "Puerto Tejada"],
        Cesar: ["Valledupar", "Aguachica", "Codazzi"],
        Chocó: ["Quibdó", "Nuquí", "Istmina"],
        Córdoba: ["Montería", "Sincelejo", "Planeta Rica"],
        Cundinamarca: ["Bogotá", "Soacha", "Girardot"],
        Guainía: ["Inírida", "Barranco Minas", "Mapiripana"],
        Guaviare: ["San José del Guaviare", "Calamar", "El Retorno"],
        Huila: ["Neiva", "Pitalito", "Garzón"],
        LaGuajira: ["Riohacha", "Maicao", "San Juan del Cesar"],
        Magdalena: ["Santa Marta", "Ciénaga", "Fundación"],
        Meta: ["Villavicencio", "Acacías", "Granada"],
        Nariño: ["Pasto", "Tumaco", "Ipiales"],
        NortedeSantander: ["Cúcuta", "Ocaña", "Pamplona"],
        Putumayo: ["Mocoa", "Puerto Asís", "Orito"],
        Quindío: ["Armenia", "Calarcá", "La Tebaida"],
        Risaralda: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal"],
        SanAndrésyProvidencia: ["San Andrés"],
        Santander: ["Bucaramanga", "Floridablanca", "Girón"],
        Sucre: ["Sincelejo", "Corozal", "Tolú"],
        Tolima: ["Ibagué", "Espinal", "Melgar"],
        ValleCauca: ["Cali", "Buenaventura", "Palmira"],
        Vaupés: ["Mitú", "Carurú", "Taraira"]
    };

    // Función para cargar las ciudades correspondientes al departamento seleccionado
    function cargarCiudades() {
        // Obtener el departamento seleccionado
        var departamentoSeleccionado = departamentoSelect.value;

        // Limpiar las opciones de ciudades
        ciudadSelect.innerHTML = "";

        // Obtener las ciudades correspondientes al departamento seleccionado
        var ciudades = ciudadesPorDepartamento[departamentoSeleccionado];

        // Habilitar o deshabilitar el select de ciudades según el departamento seleccionado
        if (ciudades && ciudades.length > 0) {
            // Habilitar el select de ciudades
            ciudadSelect.disabled = false;

            // Agregar las opciones de ciudades al select
            for (var i = 0; i < ciudades.length; i++) {
                var ciudadOption = document.createElement("option");
                ciudadOption.text = ciudades[i];
                ciudadOption.value = ciudades[i];
                ciudadSelect.appendChild(ciudadOption);
            }
        } else {
            // Deshabilitar el select de ciudades
            ciudadSelect.disabled = true;

            // Agregar una opción predeterminada
            var defaultOption = document.createElement("option");
            defaultOption.text = "Selecciona una ciudad";
            ciudadSelect.appendChild(defaultOption);
        }
    }

    // Evento para cargar las ciudades cuando se selecciona un departamento
    departamentoSelect.addEventListener("change", cargarCiudades);
});

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
// Evento para mostrar los valores al hacer clic en "Consultar"
document.getElementById("consultar").addEventListener("click", function () {
    var codigoValue = document.getElementById("codigo").value;

    // Buscar la sucursal por el código ingresado
    var sucursalConsultada = sucursales.find(function (sucursal) {
        return sucursal.codigo === codigoValue;
    });

    if (sucursalConsultada) {
        // Mostrar los valores de la sucursal consultada
        document.getElementById("codigo").value = sucursalConsultada.codigo;
        document.getElementById("direccion").value = sucursalConsultada.direccion;
        document.getElementById("departamento").value = sucursalConsultada.departamento;
        document.getElementById("ciudad").value = sucursalConsultada.ciudad;
        document.getElementById("gerente").value = sucursalConsultada.gerente;
        document.getElementById("salas").value = sucursalConsultada.salas;
        document.getElementById("trabajadores").value = sucursalConsultada.trabajadores;
        document.getElementById("cafeteria").checked = sucursalConsultada.cafeteria;
    } else {
        // Limpiar los campos de consulta si no se encuentra la sucursal
        document.getElementById("codigo").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("departamento").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("gerente").value = "";
        document.getElementById("salas").value = "";
        document.getElementById("trabajadores").value = "";
        document.getElementById("cafeteria").checked = false;

        alert("No se encontró ninguna sucursal con el código ingresado.");
    }
});







