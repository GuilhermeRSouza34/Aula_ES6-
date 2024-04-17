"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Ola Mundo";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    marca: "Ford",
    modelo: "Mustang"
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);