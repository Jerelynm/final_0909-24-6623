function aplicardescuento() {
  const input = document.getElementById("Original");
  const porcentajeInput = document.getElementById("Porcentaje");
  const lista = document.getElementById("descuentoProducto");

  const original = parseFloat(input.value);
  const porcentaje = parseFloat(porcentajeInput.value);

  if (isNaN(original) || isNaN(porcentaje) || original < 0 || porcentaje < 0) {
    alert("Ingresar precios y porcentajes válidos.");
    return;
  }

  const descuento = original * (porcentaje / 100);
  const final = original - descuento;

  const li = document.createElement("li");
  li.textContent = `Precio original: Q${original.toFixed(2)} — Descuento: ${porcentaje.toFixed(2)}% — Precio final: Q${final.toFixed(2)}`;
  lista.appendChild(li);
}