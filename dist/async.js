"use strict";

function funcaoMuitoPesado() {
  var execucoes = 0;
  for (var i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}
var funcaoMuitoPesadoPromise = new Promise(function (resolve, reject) {
  try {
    var execucoes = 0;
    for (var i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject('Deu erro');
  }
});
console.log("inicio");
//console.log(funcaoMuitoPesado());
funcaoMuitoPesadoPromise.then(function (resultado) {
  return console.log(resultado);
});
console.log("fim");