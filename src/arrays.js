const redesSociais = ['Facebook', 'instagram', 'X'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho Perfil na rede Social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(NomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho Perfil na rede Social: ${NomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Roberto', 'Ana', 'Malu'];

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);