document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var consultarBtn = document.getElementById('consultar');

  var usuarioData = {}; // Objeto para almacenar los datos

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío del formulario

      var usuario = document.getElementById('usuario').value;
      var clave = document.getElementById('clave').value;
      var rol = document.getElementById('rol').value;
      var fechaCreacion = document.getElementById('fechaCreacion').value;
      var fechaModificacion = document.getElementById('fechaModificacion').value;

      usuarioData = {
          "Usuario": usuario,
          "Contraseña": clave,
          "Rol": rol,
          "Fecha de creación": fechaCreacion,
          "Fecha de modificación": fechaModificacion
      };

      console.log(usuarioData); // Muestra los datos en la consola
  });

  consultarBtn.addEventListener('click', function() {
      // Asignar los valores al formulario
      document.getElementById('usuario').value = usuarioData.Usuario;
      document.getElementById('clave').value = usuarioData["Contraseña"];
      document.getElementById('rol').value = usuarioData.Rol;
      document.getElementById('fechaCreacion').value = usuarioData["Fecha de creación"];
      document.getElementById('fechaModificacion').value = usuarioData["Fecha de modificación"];
  });
});
