function cuatro_argumentos(a, b, c, d) {
    let suma1 = a + b;
    let suma2 = c + d;
    let multiplicacion = suma1 * suma2;

    if (multiplicacion > 50) {
        console.log("¡El número es mayor que 50!");
    } else if (multiplicacion < 50) {
        console.log("¡El número es menor que 50!");
    } else {
        console.log("¡Es 50 exacto!");
    }
}

cuatro_argumentos(10, 20, 5, 6);