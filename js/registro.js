"use strict";



// Crear usuario
    function registrarUsuario() {
  const nuevoUsuario = document.getElementById("nuevo-usuario").value.trim();
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("nueva-clave").value;

  if (nuevoUsuario && correo && clave) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({ usuario: nuevoUsuario, correo, clave });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro completado");

    
  } else {
    alert("Por favor completá todos los campos");
  }
}

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.find(u => u.usuario === usuario && u.clave === clave);

  if (existe) {
    alert("Inicio de sesión correcto");
    setTimeout(() => {
      window.location.href = "../html/pizzas.html"; 
    }, 1000);
  } else {
    alert("Usuario o clave incorrectos");
  }
}
document.getElementById("volver").addEventListener("click", () => {
  window.location.href = "../html/inicio.html";
});