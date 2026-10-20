// console.log("Hello World!")
import express from 'express';

const app = express();
// app.get('/',(req, res) => {
//     const num1 = Number(req.query.num1)
//     const num2 = Number(req.query.num2)

//     res.send({sub: num1 - num2})
//     console.log('Hello World C')
// })

// app.get("/api/pessoa/:id", (req,res) => {
//     const id = req.params.id;
//     res.json({ message: `Aqui está seu id: ${id}`});
// });

app.get('/api/ex1', (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    res.send({ soma: num1 + num2 });
});

app.get('/api/ex2', (req, res) => {
    const salH = Number(req.query.salH)
    const hM = Number(req.query.hM)

    res.send({ "O seu salário no final do mês é": salH * hM })
});

app.get('/api/ex3/', (req,res) => {
    const p1 = Number(req.query.p1)
    const p2 = Number(req.query.p2)
    const p3 = Number(req.query.p3)
    const p4 = Number(req.query.p4)
    const p5 = Number(req.query.p5)

    res.send({ "Peso Médio": (p1 + p2 + p3 + p4 + p5)/5 })
})

app.get('/api/ex4/:c', (req, res) => {
    const c = Number(req.params.c)

    res.send({ "Temperatura em Fahrenheit": ( 9 * c + 160)/5 })
});

app.get('/api/ex5/:m', (req,res) => {
    const m = Number(req.params.m)

    res.send ({ "O valor das milhas em km é": m * 1.60934})
})

app.listen(3000, () => {
        console.log(`Servidor rodando em http://localhost:${3000}`);
    });