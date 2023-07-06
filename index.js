const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');
const {v4: uuidv4} = require('uuid');

const getNewNews = () => {
  return [
    {id: uuidv4(), content: faker.lorem.sentence()},
    {id: uuidv4(), content: faker.lorem.sentence()},
    {id: uuidv4(), content: faker.lorem.sentence()},
    {id: uuidv4(), content: faker.lorem.sentence()},
    {id: uuidv4(), content: faker.lorem.sentence()},
  ];
}

const app = express();

app.use(cors());

app.get('/news/latest', (req, res) => {
  setTimeout(() => {
    res.json(getNewNews());
  }, 2000);
});

app.listen(7070);

console.log('сервер запущен');