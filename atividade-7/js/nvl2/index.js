const express = require('express');
const app = express();
const port = 3000;

const soma = require('./adicao');
const subtracao = require('./subtracao');
const multiplicacao = require('./multiplicacao');
const divisao = require('./divisao');

app.get('/soma', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = soma(a, b);

    res.send(`Soma de ${a} + ${b} igual a ${c}`);
})

app.get('/subtracao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = subtracao(a, b);

    res.send(`Subtração de ${a} - ${b} igual a ${c}`);
})

app.get('/multiplicacao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = multiplicacao(a, b);

    res.send(`Multiplicação de ${a} vezes ${b} igual a ${c}`);
})

app.get('/divisao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = divisao(a, b);

    res.send(`Divisão de ${a} por ${b} igual a ${c}`);
})

app.get('/todasOperacoes', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = soma(a, b);
    const d = subtracao(a, b);
    const e = multiplicacao(a, b);
    const f = divisao(a, b);

    res.send(`Soma: ${a} + ${b} igual a ${c}; <br /> <br /> Subtração: ${a} - ${b} igual a ${d};
    <br /> <br /> Multiplicação: ${a} x ${b} igual a ${e}; <br /> <br /> Divisão: ${a} / ${b} igual a ${f}`);
})

app.listen(port, () => {
    console.log("Serve funcionando");
})

