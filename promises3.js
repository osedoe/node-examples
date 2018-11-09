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
calculoLargo(2).then(resultado => console.log('Resultado', resultado));
console.log('Fin');