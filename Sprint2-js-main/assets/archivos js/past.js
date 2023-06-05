const nav = document.querySelector("#nav");
const abrir = document.querySelector("#open");
const cerrar = document.querySelector("#close");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

//ESTO ES PARA LAS CARDS//
const cards=document.getElementById("sec-card-past");
function crearListacards(eventos){
return`<main class="card" style="width: 18rem;">
<img class="img-cards" src="${eventos.image}" class="card-img-top" alt="${eventos.name}">
<div class="card-body">
  <h5 class="card-title">${eventos.name}</h5>
  <p class="card-text">${eventos.description}</p>
  <div class="price-btn">
  <p>Price: $${eventos.price}</p>
  <a href="./Details.html" class="btn btn-primary">Details</a>  
  </div>
</div>
</main>`
}
function cargarElDato(datos) {
    let template = "";
    for (i=0; i<datos.length; i++){
        if(i===0||i===2||i===4||i===7||i===8||i===11||i===12){
        template+=crearListacards(datos[i]);    
        }
    }
cards.innerHTML += template;
}
cargarElDato(events);
