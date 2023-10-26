const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}
function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('dat-id')
    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src ="${elemento.imagen}" width=100 >
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a herf="#" class="borrar" data-id="${elemento.id}" > X </a>
    </td>
    `;
    lista.appendChild(row);
}
function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}
function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}
    const imageToZoom = document.getElementById("image-to-zoom");

    // Función para alternar entre el tamaño original y ampliado
    function toggleZoom() {
        if (imageToZoom.style.transform === "scale(1)") {
            imageToZoom.style.transform = "scale(1.5)";
        } else {
            imageToZoom.style.transform = "scale(1)";
        }
    }

    // Agrega un evento de clic a la imagen para activar la función
    imageToZoom.addEventListener("click", toggleZoom);
   
  // Agrega un evento de clic a todos los botones de "Agregar"
  const agregarBotones = document.querySelectorAll(".agregar-carrito");

  agregarBotones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      // Cambia la clase de la sección para aplicar el nuevo estilo
      const section = document.querySelector(".products");
      section.classList.toggle("color-changed");
    });
  });
// Optional JavaScript for controlling the carousel
const carousel = document.querySelector('.carousel');

// Pause the animation on hover
carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});
