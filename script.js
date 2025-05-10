function abrirSobre() {
  const carta = document.getElementById("carta");
  carta.classList.toggle("abierta");
}

document.getElementById('finalTexto').addEventListener('click', function () {
  const carta = document.getElementById('carta');
  carta.classList.add('desaparecer');

  setTimeout(function () {
    document.querySelector('.contenedor').style.display = 'none';
    document.getElementById('imagenes').style.display = 'block';
    generarEfectosAleatorios(); // 👈 Activa efectos aquí
    mostrarImagenes();
  }, 1000);
});

function mostrarImagenes() {
  const imagenes = document.querySelectorAll('.imagen');
  let index = 0;

  function mostrarImagen() {
    if (index < imagenes.length) {
      const img = imagenes[index];
      img.classList.add('mostrar');

      setTimeout(() => {
        img.classList.add('mover');

        setTimeout(() => {
          img.classList.remove('mostrar', 'mover');
          index++;
          mostrarImagen();
        }, 1000);
      }, 1500);
    } else {
      mostrarTarjetaFinal();
    }
  }

  mostrarImagen();
}

function mostrarTarjetaFinal() {
  document.getElementById('tarjetaFinal').style.display = 'block';
}

function generarEfectosAleatorios() {
  const contenedor = document.getElementById('imagenes');

  setInterval(() => {
    const tipo = Math.random();
    let elemento;

    if (tipo < 0.4) {
      elemento = document.createElement('div');
      elemento.classList.add('heart');
    } else if (tipo < 0.7) {
      elemento = document.createElement('div');
      elemento.classList.add('brillo');
    } else {
      elemento = document.createElement('div');
      elemento.classList.add('particula');
    }

    const left = Math.random() * 100;
    const size = Math.random() * 20 + 10;
    elemento.style.left = `${left}%`;
    elemento.style.width = `${size}px`;
    elemento.style.height = `${size}px`;

    contenedor.appendChild(elemento);

    setTimeout(() => {
      contenedor.removeChild(elemento);
    }, 12000);
  }, 200);
}

