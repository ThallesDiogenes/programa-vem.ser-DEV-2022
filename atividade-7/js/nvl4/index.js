const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const objeto = {
    "numero1": 12,
    "numero2": 12,
    "operador": "-",
};

const funcoes = require('./funcoes');

app.post('/', (req, res) => {
    const a = objeto.numero1;
    const b = objeto.numero2;

    if(objeto.operador === "+"){
        const c = funcoes.soma(a,b);
        res.send(`Soma: ${a} + ${b} igual a ${c}`);
    } else if (objeto.operador === "-") {
        const c = funcoes.subtracao(a,b);
        res.send(`Subtracao: ${a} - ${b} igual a ${c}`);
    } else if (objeto.operador === "*") {
        const c = funcoes.multiplicacao(a,b);
        res.send(`Multiplicação: ${a} * ${b} igual a ${c}`);
    } else {
        const c = funcoes.divisao(a,b);
        res.send(`Divisão: ${a} / ${b} igual a ${c}`);
    }
});

app.listen(port, () => {
    console.log("Serve funcionando");
})
