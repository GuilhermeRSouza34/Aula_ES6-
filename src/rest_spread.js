//Rest
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



//Spread
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(...numeros)

const timesDeFutebolSerieA = ['São Paulo', 'Palmeiras', 'Flamengo', 'Corinthians', 'Fluminense', 'Vasco'];
const timesDeFutebolSerieB = ['Santos', 'Amazonas', 'Brusque', 'Operario-PR', 'Paysandu', 'Ponte Preta'];
const timesDeFutebol = [...timesDeFutebolSerieA, ...timesDeFutebolSerieB];
//const timesDeFutebol = [timesDeFutebolSerieA.concat(timesDeFutebolSerieB)];

//timesDeFutebolSerieA.concat(timesDeFutebolSerieB)
console.log(timesDeFutebol)

const carroDaPaula = {
    modelo: 'Fusca',
    ano: 2020,
    cor: 'Azul'
}

const carroDaAna = {
    ...carroDaPaula,
    ano: 2021,
    cor: 'Preto'
}

console.log(carroDaAna);


//Desestruturação
//const anoDoCarroDaAna = carroDaAna.ano;
const {ano: anoDoCarroDaAna} = carroDaAna;
const {ano: anoDoCarroDaPaula} = carroDaPaula;

console.log(anoDoCarroDaAna);
console.log(anoDoCarroDaPaula);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);