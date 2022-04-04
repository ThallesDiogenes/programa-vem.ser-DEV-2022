const express = require('express');
const app = express();
const port = 3000;

const objeto = {
    "numero1": 12,
    "numero2": 12,
    "operador": "*",
};

const funcoes = require('./funcoes');

app.post('/', (req, res) => {
    const a = objeto.numero1;
    const b = objeto.numero2;
    
    switch (objeto.operador){
        case "+":
            res.send(`Soma: ${a} + ${b} igual a ${funcoes.soma(a, b)}`);
            break;
        case "-":
            res.send(`Subtracao: ${a} - ${b} igual a ${funcoes.subtracao(a, b)}`);
            break;
        case "*": 
            res.send(`Multiplicação: ${a} * ${b} igual a ${funcoes.multiplicacao(a, b)}`);
            break;
        default:
            res.send(`Divisão: ${a} / ${b} igual a ${funcoes.divisao(a, b)}`);
    }
});

app.listen(port, () => {
    console.log("Serve funcionando");
})
