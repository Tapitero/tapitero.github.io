let miImage = document.querySelector('img');

miImage.onclick = () => {
let miSrc= miImage.getAttribute('src')
miSrc === 'images/Pato.jpg'
? miImage.setAttribute('src', 'images/el-segundo-pato.jpg')
: miImage.setAttribute('src', 'images/Pato.jpg');
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
      } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = miNombre + ' hace lo del pato (nada)';
      }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = nombreAlmacenado + ' hace lo del pato (nada)';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}