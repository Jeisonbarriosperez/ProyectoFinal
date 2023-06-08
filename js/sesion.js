function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    // Validar usuario y contraseña
    if (usuario === "cliente" && clave === "123") {
      window.location.href = 'html/cliente.html';
    } else if (usuario === "administrador" && clave === "123") {
      window.location.href = 'html/administrador.html';
    } else if (usuario === "gerente" && clave === "123") {
      window.location.href = 'html/gerente.html';
    } else if (usuario === "vendedor" && clave === "123") {
      window.location.href = 'html/vendedor.html';
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }