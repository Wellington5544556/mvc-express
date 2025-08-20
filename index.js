const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'wellinton' });
});

app.use('/livros', require('./routes/livrosRoutes'));

app.listen(3009, () => {
  console.log('Server is running on port http://localhost:3009');
});

