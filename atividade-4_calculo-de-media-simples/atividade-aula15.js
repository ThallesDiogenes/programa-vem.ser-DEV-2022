const listaAlunos = [
    {
        nome: "Tiago dos Santos",
        disciplina: "Matemática",
        notas: [6.5, 4.3, 7.1, 9.0]
    },
    {
        nome: "Alex Carneiro",
        disciplina: "Matemática",
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];

for (let i = 0; i < listaAlunos.length; i++){
    let soma = 0;
    let media;
    for (let j = 0; j < listaAlunos[i].notas.length; j++) {
        let nota = listaAlunos[i].notas[j];
        soma += nota;
        media = soma / listaAlunos[i].notas.length;
    }
    if (media >= 6) {
        console.log(`Aluno: ${listaAlunos[i].nome} - ${listaAlunos[i].disciplina} - Média final: ${media} - Status: Aprovado!`);
    } else {
        console.log(`Aluno: ${listaAlunos[i].nome} - ${listaAlunos[i].disciplina} - Média final: ${media} - Status: Reprovado!`);
    }
}
