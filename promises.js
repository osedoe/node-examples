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
console.log('Inicio');
console.log(calculoLargo(2));
console.log('Fin');