"use strict";

var redesSociais = ['Facebook', 'instagram', 'X'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho Perfil na rede Social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (NomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho Perfil na rede Social: ").concat(NomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Roberto', 'Ana', 'Malu'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);