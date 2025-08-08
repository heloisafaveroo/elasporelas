const express = require('express')
const app = express()
const port = 3000

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));
app.use(express.static(path.join(__dirname, 'public/script')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"))
});

app.get('/eventos', (req, res) => {
  res.sendFile(path.join(__dirname, "app/eventos.html"))
});

app.get('/comunidade', (req, res) => {
  res.sendFile(path.join(__dirname, "app/comunidade.html"))
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`)
});