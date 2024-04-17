let meuMap = new Map();
meuMap.set("nome", 'Guilherme');
meuMap.set("stack", "HTML, CSS, JavaScript");

console.log(meuMap);

const nome = meuMap.get("nome");
console.log(nome);
console.log(meuMap.size)
console.log(meuMap.has("sobrenome"))

//meuMap.clear();
console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

meuMap.delete("stack");
console.log(meuMap);


//SET

const cpfs = new Set();
cpfs.add('11111111111')
cpfs.add('22222222222')
cpfs.add('33333333333')

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

//Utilizando o Array como Set para nao colocar itens duplicados
const array = ['Guilherme', 'Paulo', 'Ana', 'Ana', 'Paula', 'Paulo', 'Carlos', 'Bebeto']
const arrayComoSet = new Set([...array]);
console.log(arrayComoSet);