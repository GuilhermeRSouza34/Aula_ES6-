let meuMap = new Map();
meuMap.set("nome", 'Guilherme');

console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);
console.log(meuMap.size)
console.log(meuMap.has("sobrenome"))

meuMap.clear();
console.log(meuMap.size);