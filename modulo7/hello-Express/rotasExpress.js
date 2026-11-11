import express from 'express';  

const app = express();
const port1 = 3000;
const port2 = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("rota 1!")
});
app.get('/', (req, res) => {
    res.send('rota 2!');
}); 
app.listen(port1, () => {
    console.log(`servidor rodando em http://localhost:${port1}`);
});
