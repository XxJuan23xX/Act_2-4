function calcularMCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calcularMCD(b, a % b);
}

document.getElementById('mcdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    
    const resultado = calcularMCD(numero1, numero2);
    
    document.getElementById('resultado').textContent = `El MCD de ${numero1} y ${numero2} es: ${resultado}`;
});
