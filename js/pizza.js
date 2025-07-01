"use strict";
  let carrito = [];

  document.addEventListener("DOMContentLoaded", () => { 
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    const totalSpan = document.getElementById("total");
    const btnFinalizar = document.getElementById("comprarBtn");

   botonesAgregar.forEach(boton => { 
  boton.addEventListener("click", () => {
    const tarjeta = boton.closest(".tarjeta-pizza");
    const nombre = tarjeta.querySelector("h3").textContent;
    const precio = parseFloat(tarjeta.querySelector(".precio").textContent.replace("$", ""));
    const input = tarjeta.querySelector("input[type='number']");
    const cantidad = parseInt(input.value);

    if (cantidad > 0) {
      agregarAlCarrito(nombre, precio, cantidad);
      actualizarTotal(totalSpan);
      input.value = 0; // Volver a cero después de agregar
    }
  });
});

    btnFinalizar.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
      } else {
        let resumen = "Resumen de tu compra:\n";
        let total = 0;
        carrito.forEach(item => {
          resumen += `🍕 ${item.nombre} x${item.cantidad} = $${item.precio * item.cantidad}\n`;
          total += item.precio * item.cantidad;
        });
        resumen += `\nTotal: $${total}`;
        alert(resumen);
        window.location.href = "../html/pagoEnvio.html";
      }
    });
  });
  

  function agregarAlCarrito(nombre, precio, cantidad) {
    const index = carrito.findIndex(p => p.nombre === nombre);
    if (index !== -1) {
      carrito[index].cantidad += cantidad;
    } else {
      carrito.push({ nombre, precio, cantidad });
    }
  }

  function actualizarTotal(span) {
    let total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    span.textContent = total.toLocaleString();
  }


