function aplicardescuento() {
  const input = document.getElementById("Original");
  const porcentajeInput = document.getElementById("Porcentaje");
  const lista = document.getElementById("descuentoProducto");

  const originalStr = (input.value || "").trim();
  const porcentajeStr = (porcentajeInput.value || "").trim();

  // Validaciones básicas
  if (originalStr === "") {
    alert("Ingrese el precio original.");
    input.focus();
    return;
  }
  if (porcentajeStr === "") {
    alert("Ingrese el porcentaje de descuento.");
    porcentajeInput.focus();
    return;
  }

  const original = parseFloat(originalStr);
  const porcentaje = parseFloat(porcentajeStr);

  if (isNaN(original) || original < 0) {
    alert("Precio original inválido. Debe ser un número mayor o igual a 0.");
    input.focus();
    return;
  }

  if (isNaN(porcentaje) || porcentaje < 0) {
    alert("Porcentaje inválido. Debe ser un número mayor o igual a 0.");
    porcentajeInput.focus();
    return;
  }

  if (porcentaje > 100) {
    alert("El porcentaje no puede ser mayor a 100.");
    porcentajeInput.focus();
    return;
  }

  // Cálculo
  const descuento = original * (porcentaje / 100);
  const final = original - descuento;

  // Mostrar resultado (añade al historial)
  const li = document.createElement("li");
  li.textContent = `Precio original: Q${original.toFixed(2)} — Descuento: ${porcentaje.toFixed(2)}% — Precio final: Q${final.toFixed(2)}`;
  lista.appendChild(li);

}