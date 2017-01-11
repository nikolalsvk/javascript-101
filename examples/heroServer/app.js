const express = require('express');
const bodyParser = require('body-parser');
const Hero = require('./hero');

const app = express();

app.use(bodyParser.json());

const heroes = [
  new Hero('Zed', 'Assaissin', 600, 0, 65),
  new Hero('Sona', 'Support', 500, 300, 50)
];

app.get('/heroes', (req, res) => {
  res.send(heroes);
});

app.post('/hero', (req, res) => {
  const hero = req.body;
  console.log(hero);
  heroes.push(new Hero(hero.name,
                       hero.type,
                       hero.health,
                       hero.mana,
                       hero.dmg));
  res.send('pls');
});

app.delete('/hero/:index', (req, res) => {
  heroes.splice(req.params.index, 1);
});

app.listen(3001, () => {
  console.log('app listening on port 3001');
});


