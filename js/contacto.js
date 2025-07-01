"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const correo = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Esto impide que el formulario se envíe automáticamente.

    if (validarFormulario()) {
      // valida los datos y, si todo está correcto, muestra un mensaje de agradecimiento y reinicia el formulario.

      alert("¡Gracias por tu mensaje! Te responderemos pronto.");
      form.reset(); // Limpia el formulario
    }
  });

  function validarFormulario() {
    //para q todos los campos esten completos
    if (
      nombre.value.trim() === "" ||
      apellido.value.trim() === "" ||
      correo.value.trim() === "" ||
      telefono.value.trim() === "" ||
      mensaje.value.trim() === ""
    ) {
      alert("Todos los campos son obligatorios.");
      return false;
    }

    if (!validarEmail(correo.value)) {
      //correo y teléfono sean válidos antes del envío.
      alert("Introduce un correo válido.");
      return false;
    }

    if (!validarTelefono(telefono.value)) {
      alert("Introduce un teléfono válido.");
      return false;
    }

    return true;
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Verifica el formato válido
  }

  function validarTelefono(telefono) {
    return /^\d{10}$/.test(telefono); // Asegura que tenga 10 dígitos
  }
});