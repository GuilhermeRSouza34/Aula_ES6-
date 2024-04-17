function somar(a, b) {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    //arguments.map
    //console.log(arguments)
    //return a + b;
}

console.log(somar(10, 20))