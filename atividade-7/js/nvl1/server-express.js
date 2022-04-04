const express = require('express');
const app = express();
const port = 3000;

app.get('/soma', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a + b;

    res.send(`Soma de ${a} + ${b} igual a ${c}`);
})

app.get('/subtracao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a - b;

    res.send(`Subtração de ${a} - ${b} igual a ${c}`);
})

app.get('/multiplicacao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a * b;

    res.send(`Multiplicação de ${a} * ${b} igual a ${c}`);
})

app.get('/divisao', (req, res) => {
    console.log(req.query);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a / b;

    res.send(`Multiplicação de ${a} / ${b} igual a ${c}`);
})

app.listen(port, () => {
    console.log("Serve funcionando");
})