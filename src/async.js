function funcaoMuitoPesado() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++ ) {
        execucoes++;
    }
    return execucoes;
}

console.log("inicio")
funcaoMuitoPesado();
console.log("fim");