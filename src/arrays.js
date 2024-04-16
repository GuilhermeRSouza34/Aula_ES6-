const redesSociais = ['Facebook', 'instagram', 'X'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho Perfil na rede Social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(NomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho Perfil na rede Social: ${NomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Roberto', 'Ana', 'Malu'];

const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2);

const paula = alunos2.find(function (item) {
    return item.nome == 'Gustavo'
});

console.log(Gustavo);