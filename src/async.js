function funcaoMuitoPesado() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++ ) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadoPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++ ) {
            execucoes++;
        }
        resolve (execucoes);
    } catch (e) {
        reject ('Deu erro');
    }
})

console.log("inicio");
//console.log(funcaoMuitoPesado());
funcaoMuitoPesadoPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
console.log("fim");


//ORGANIZANDO O CODIGO
async function execucaoPrincipal() {
    console.log("Inicio");
    await funcaoMuitoPesadoPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    console.log("fim");
}

execucaoPrincipal();

