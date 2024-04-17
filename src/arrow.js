const minhaFuncao = () => "Ola Mundo";

const retornaUmCarro = () => ({
    marca: "Ford",
    modelo: "Mustang"
})
     
console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);