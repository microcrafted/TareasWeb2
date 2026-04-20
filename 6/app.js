function agregarPantalla(valor) {
    document.getElementById("pantalla").value += valor;
}

function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}

function calcularResultado() {
    let expresion = document.getElementById("pantalla").value;
    try {
        let resultado = eval(expresion);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}

document.getElementById("calculadora-form").addEventListener("submit", 
    function(event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página        
        // Obtiene los valores de los campos de entrada
        let num1 = parseFloat(document.getElementById("num1").value.trim());
        let num2 = parseFloat(document.getElementById("num2").value.trim());
        
        let operador = document.getElementById("operador").value;
        let resultado;
        // Realiza la operación según el operador seleccionado
        switch (operador) {
            case "sum":
                resultado = num1 + num2;
                break;
            case "sub":
                resultado = num1 - num2;
                break;
            case "mul":
                resultado = num1 * num2;
                break;
            case "div":
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    resultado = "Error: División por cero";
                }
                break;
            default:
                resultado = "Operador no válido";
        }

        // Muestra el resultado en el elemento con id "resultado"
        document.getElementById("resultado").textContent = "Resultado: " + resultado;
    } );

    






