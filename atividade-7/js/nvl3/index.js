const express = require('express');
const app = express();
const port = 3000;

const funcoes = require('./funcoes.js');

app.get('/soma', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = funcoes.soma(a, b);
    res.send(`Soma: ${a} + ${b} igual a ${c}`);
})

app.get('/subtracao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = funcoes.subtracao(a, b);
    res.send(`Subtração: ${a} - ${b} igual a ${c}`);
})

app.get('/multiplicacao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = funcoes.multiplicacao(a, b);
    res.send(`Multiplicação: ${a} * ${b} igual a ${c}`);
})

app.get('/divisao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = funcoes.divisao(a, b);
    res.send(`Divisão: ${a} / ${b} igual a ${c}`);
})

app.listen(port, () => {
    console.log("Serve funcionando");
})