function calculoLargo(value) {
    console.log('A');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value > 10) {
                reject('Ha fallado el cálculo largo');
            } else {
                console.log('B');
                resolve({
                    result: 100
                });
            }
        }, 3000);
        console.log('C');
    });
}

console.log(calculoLargo(2));