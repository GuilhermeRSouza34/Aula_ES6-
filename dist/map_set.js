"use strict";

var meuMap = new Map();
meuMap.set("nome", 'Guilherme');
console.log(meuMap);
var nome = meuMap.get("nome");
console.log(nome);
console.log(meuMap.size);
console.log(meuMap.has("sobrenome"));
meuMap.clear();
console.log(meuMap.size);