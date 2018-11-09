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
calculoLargo(50)
    .then(resultado => console.log('Resultado', resultado))
    .catch(err => console.log('Error', err));
console.log('Fin');