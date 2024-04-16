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
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Gustavo';
});
console.log(Gustavo);