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



app.listen(3000, () => {
        console.log(`Servidor rodando em http://localhost:${3000}`);
    });