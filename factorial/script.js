function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

document.getElementById('calcular').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    if (numero >= 0) {
        const resultado = calcularFactorial(numero);
        document.getElementById('resultado').textContent = `El factorial de ${numero} es: ${resultado}`;
    } else {
        document.getElementById('resultado').textContent = `Por favor, ingresa un número válido.`;
    }
});
