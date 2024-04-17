function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    //arguments.map
    //console.log(arguments)
    //return a + b;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numetoAtual) => {
        total += numetoAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))