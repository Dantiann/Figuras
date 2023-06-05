function circulo() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("circulo") /*agrega y quita la clase con cada click*/
}

function rectangulo() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("rectangulo"); /*agrega y quita la clase con cada click*/
}

function degradado() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("degradado"); /*agrega y quita la clase con cada click*/
}

function gif() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("gif"); /*agrega y quita la clase con cada click*/
}

function arriba() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("arriba"); /*agrega y quita la clase con cada click*/
}

function abajo() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("abajo"); /*agrega y quita la clase con cada click*/
}

function izquierda() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("izquierda"); /*agrega y quita la clase con cada click*/
}

function derecha() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("derecha"); /*agrega y quita la clase con cada click*/
}

function diagonal() {
    let figura = document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("diagonal"); /*agrega y quita la clase con cada click*/
}

function animacion() {
    const figura = document.querySelector("#figura");
    figura.classList.toggle("animacion");

}    

function panelLateral() {
    const panelLateral = document.querySelector(".panelLateral");
    panelLateral.classList.toggle("active");

}

 function modal() {
     const modal = document.querySelector("#modal");
     modal.classList.toggle("active");
}

// function modal() {
//     const modal = document.querySelector("#modal");
//     modal.style.display = (modal.style.display === "none") ? "flex" : "none";
// }
