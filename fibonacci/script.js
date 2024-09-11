function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numero = parseInt(document.getElementById('numero').value);
    let resultado = [];
    
    for (let i = 0; i < numero; i++) {
        resultado.push(fibonacci(i));
    }
    
    document.getElementById('resultado').textContent = `La serie de Fibonacci es: ${resultado.join(', ')}`;
});
