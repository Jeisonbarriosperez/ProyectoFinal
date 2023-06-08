window.onload = function() {
    generarGrafica();
  };
  // Generar datos aleatorios para los géneros de películas y períodos de tiempo
  function generarDatos(periodo, generos) {
    const datos = {
      labels: [],
      datasets: []
    };

    // Generar etiquetas para los períodos de tiempo
    for (let i = 1; i <= periodo; i++) {
      datos.labels.push(obtenerEtiquetaPeriodo(i, periodo));
    }

    // Generar datos para cada género de película
    for (let genero of generos) {
      const datosGenero = [];
      for (let i = 0; i < periodo; i++) {
        datosGenero.push(generarNumeroAleatorio(50, 200)); // Generar número aleatorio entre 50 y 200
      }

      datos.datasets.push({
        label: genero,
        data: datosGenero,
        backgroundColor: generarColorAleatorio(),
        borderColor: generarColorAleatorio(),
        borderWidth: 1
      });
    }

    return datos;
  }

  // Generar una etiqueta para cada período de tiempo
  function obtenerEtiquetaPeriodo(periodoActual, periodoTotal) {
    if (periodoTotal <= 12) {
      return `Mes ${periodoActual}`;
    } else if (periodoTotal <= 24) {
      return `Quincena ${periodoActual}`;
    } else {
      return `Semana ${periodoActual}`;
    }
  }

  // Generar un número aleatorio entre un rango dado
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generar un color aleatorio en formato rgba
  function generarColorAleatorio() {
    const r = generarNumeroAleatorio(0, 255);
    const g = generarNumeroAleatorio(0, 255);
    const b = generarNumeroAleatorio(0, 255);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }

  // Configuración de la gráfica
  const opciones = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

      // Función para generar la gráfica
      function generarGrafica() {
    const generosPeliculas = ['Acción', 'Comedia', 'Drama', 'Aventura', 'Ciencia ficción'];
    const periodoTiempo = obtenerPeriodoSeleccionado();
    const datosGrafica = generarDatos(periodoTiempo, generosPeliculas);

    // Crear la gráfica de barras
    const ctx = document.getElementById('chart').getContext('2d');
    if (window.grafica) {
      // Si ya existe una gráfica previa, destruirla antes de crear la nueva
      window.grafica.destroy();
    }
    window.grafica = new Chart(ctx, {
      type: 'bar',
      data: datosGrafica,
      options: opciones
    });
  }

  // Obtener la periodicidad seleccionada del combobox
  function obtenerPeriodoSeleccionado() {
    const combobox = document.getElementById('periodicidad');
    const periodoSeleccionado = combobox.value;
    let periodoTiempo;

    switch (periodoSeleccionado) {
      case 'semanal':
        periodoTiempo = 52; // Semanal: 52 semanas al año
        break;
      case 'quincenal':
        periodoTiempo = 24; // Quincenal: 24 quincenas al año
        break;
      case 'semestral':
        periodoTiempo = 2; // Semestral: 2 trimestres al año
        break;
      default:
        periodoTiempo = 52;
        break;
    }

    return periodoTiempo;
  }