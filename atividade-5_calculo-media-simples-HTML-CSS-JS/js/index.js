document.querySelector("#botao_form").addEventListener("click", calcular);

function calcular() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    const nota4 = parseInt(document.getElementById("nota4").value);
    var isEmpty = document.getElementById("minha-mensagem").innerHTML === "";

    if (nota1 && nota2 && nota3 && nota4 !== "") {
        if(isEmpty) {
            let media = (nota1 + nota2 + nota3 + nota4)/4;
            
            if (media >= 6) {
                mensagem.push(`O aluno ${nome} obteve média final igual a ${media}. Situação aprovado!`);
                render();
            } else {
                mensagem.push(`O aluno ${nome} obteve média final igual a ${media}. Situação reprovado!`)
                render();
            }
        }
    }

}

function apagar(id) {
    let auxMensagem = [];

    mensagem.forEach((nome, pos) => {
        if (pos != id && nome != "") {
            auxMensagem.push(nome);
        }
    });

    mensagem = auxMensagem;
    render();
}