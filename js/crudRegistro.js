"use strict";
 // Mostrar usuarios guardados
    function mostrarUsuarios() {
      const lista = document.getElementById("lista-usuarios");
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      lista.innerHTML = "";

      usuarios.forEach((u, i) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${u.usuario}</td>
          <td>${u.correo}</td>
          <td>
            <button onclick="modificarUsuario(${i})">✏️</button>
            <button onclick="eliminarUsuario(${i})">🗑️</button>
          </td>
        `;
        lista.appendChild(fila);
      });
    }



    // Editar usuario (PUT/modificar)
    function modificarUsuario(index) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const nuevoNombre = prompt("Nuevo nombre:", usuarios[index].usuario);
      const nuevoCorreo = prompt("Nuevo correo:", usuarios[index].correo);

      if (nuevoNombre && nuevoCorreo) {
        usuarios[index].usuario = nuevoNombre;
        usuarios[index].correo = nuevoCorreo;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
      }
    }

    // Eliminar usuario (DELETE)
    function eliminarUsuario(index) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      if (confirm("¿Eliminar este usuario?")) {
        usuarios.splice(index, 1);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
      }
    }

    // Mostrar al cargar
    mostrarUsuarios();