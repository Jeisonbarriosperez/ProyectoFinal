function registrarUsuario() {
    var usuarioInput = document.getElementById('usuario');
    var claveInput = document.getElementById('clave');
    var confirmarClaveInput = document.getElementById('confirmar-clave');
    var usuario = usuarioInput.value;
    var clave = claveInput.value;
    var confirmarClave = confirmarClaveInput.value;
    if (usuario === '') {
        alert('Por favor, ingresa un usuario válido.');
        usuarioInput.focus();
        return;
    }
    if (clave === '') {
        alert('Por favor, ingresa una contraseña.');
        claveInput.focus();
        return;
    }
    if (clave !== confirmarClave) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo nuevamente.');
        confirmarClaveInput.focus();
        return;
    }
    alert('¡Usuario registrado exitosamente!');
    // Redirigir a la página de inicio de sesión
    window.location.href = 'iniciarSesion.html';
}
