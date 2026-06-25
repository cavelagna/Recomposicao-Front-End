const plano = document.getElementById ("plano");
const coordenadas = document.getElementById("coordenadas");

plano.addEventListener("click", function(event) {

    const x = event.offsetX;    
    const y = event.offsetY;

    coordenadas.textContent = `Coordenadas selecionada: (X: ${x} , Y: ${y})`;

    const ponto = document.createElement("div");

    ponto.classList.add("ponto");

    ponto.style.left = `${x - 6}px`;
    ponto.style.top  = `${y - 6}px`;

    plano.appendChild(ponto);



})
