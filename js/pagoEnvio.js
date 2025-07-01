document.getElementById("confirmarPedido").addEventListener("click", () => {
  const pago = document.querySelector('input[name="pago"]:checked');
  const envio = document.querySelector('input[name="envio"]:checked');

  if (pago && envio) {
    document.getElementById("resultado").innerText =
      `✔ Has elegido pagar con ${pago.value} y recibir tu pedido por ${envio.value}. ¡Gracias por tu compra!`;
  } else {
    document.getElementById("resultado").innerText =
      "Por favor seleccioná un medio de pago y una forma de envío.";
  }
});


document.getElementById("volver").addEventListener("click", () => {
  window.location.href = "../html/inicio.html";
});
