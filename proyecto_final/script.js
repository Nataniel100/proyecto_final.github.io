// =====================================================
// 🐾 PATITAS GENIALES
// JavaScript principal
// =====================================================

// =====================================================
// MENÚ DESPLEGABLE
// =====================================================

function abrirMenu() {

const menu = document.getElementById("menu");

menu.classList.toggle("mostrar");

}

// =====================================================
// CERRAR EL MENÚ AL HACER CLIC FUERA
// =====================================================

document.addEventListener("click", function(event) {

const menu = document.getElementById("menu");
const boton = document.querySelector(".boton-menu");

if (
!menu.contains(event.target) &&
!boton.contains(event.target)
) {

```
menu.classList.remove("mostrar");
```

}

});

// =====================================================
// CERRAR EL MENÚ AL SELECCIONAR UNA OPCIÓN
// =====================================================

const enlaces = document.querySelectorAll(".menu-desplegable a");

enlaces.forEach(function(enlace) {

enlace.addEventListener("click", function() {

```
const menu = document.getElementById("menu");

menu.classList.remove("mostrar");
```

});

});

// =====================================================
// ANIMACIÓN DE LAS TARJETAS
// =====================================================

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function(tarjeta) {

tarjeta.addEventListener("mouseenter", function() {

```
tarjeta.style.transform = "translateY(-10px) scale(1.02)";
```

});

tarjeta.addEventListener("mouseleave", function() {

```
tarjeta.style.transform = "translateY(0) scale(1)";
```

});

});

// =====================================================
// EFECTO AL PASAR SOBRE LAS IMÁGENES
// =====================================================

const imagenes = document.querySelectorAll(".card-imagen img");

imagenes.forEach(function(imagen) {

imagen.addEventListener("mouseenter", function() {

```
imagen.style.transform = "scale(1.08)";
```

});

imagen.addEventListener("mouseleave", function() {

```
imagen.style.transform = "scale(1)";
```

});

});

// =====================================================
// EFECTO EN LOS BOTONES
// =====================================================

const botones = document.querySelectorAll(".card-boton a");

botones.forEach(function(boton) {

boton.addEventListener("mouseenter", function() {

```
boton.style.transform = "scale(1.08)";
```

});

boton.addEventListener("mouseleave", function() {

```
boton.style.transform = "scale(1)";
```

});

});

// =====================================================
// ANIMACIÓN DE ENTRADA
// =====================================================

window.addEventListener("load", function() {

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(function(tarjeta, indice) {

```
tarjeta.style.opacity = "0";
tarjeta.style.transform = "translateY(30px)";

setTimeout(function() {

  tarjeta.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  tarjeta.style.opacity = "1";
  tarjeta.style.transform = "translateY(0)";

}, 200 + (indice * 200));
```

});

});

// =====================================================
// EFECTO DE BIENVENIDA EN LA CONSOLA
// =====================================================

console.log("🐾 Patitas Geniales");
console.log("🐶 Página cargada correctamente.");
console.log("✨ ¡Listos para aprender y entrenar!");
