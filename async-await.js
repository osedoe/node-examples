function calculoLargo(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 10) {
                reject('Ha fallado el cálculo largo');
            } else {
                resolve({
                    result: 100
                });
            }
        }, 3000);
    });
}

async function calculoLargoAsincrono() {
    console.log('Antes del calculo largo');
    const resultado = await calculoLargo(3);
    console.log('Después del cálculo largo', resultado);
    return resultado;
}

calculoLargoAsincrono();