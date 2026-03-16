let frutas = [];
let continuar = true;

while (continuar) {
    let fruta = prompt("Ingresa una fruta:");
    frutas.push(fruta);

    continuar = confirm("¿Quieres agregar otra fruta?");
}

console.log(frutas);