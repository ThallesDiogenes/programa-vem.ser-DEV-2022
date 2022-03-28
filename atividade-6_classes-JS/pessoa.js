function Pessoa(nome, idioma, idade, altura, peso, estado) {
    //propriedades
    this.nome = nome,
    this.idioma = idioma,
    this.idade = idade,
    this.altura = altura,
    this.peso = peso,
    this.velocidade = 0,
    this.estado = estado
}


let pessoaTiago = new Pessoa("Tiago", "Português", "37", "1.74", "90", "parado");
let pessoaThalles = new Pessoa("Thalles", "Português", "32", "1.71", "92", "parado");

console.log(JSON.stringify(pessoaTiago));
console.log(JSON.stringify(pessoaThalles));