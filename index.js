const express = require('express');

const app = express();
const { db } = require('./conf');

app.get('/chapters/:id', async (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT id, text FROM chapters WHERE id=?';
  const sqlValues = [id];
  const [chapters] = await db.query(sql, sqlValues);

  if (chapters.length) {
    res.json(chapters);
  } else {
    res.status(404).send('404 not found');
  }
});

app.get('/choices/:idChapter', async (req, res) => {
  const { idChapter } = req.params;
  const sql =
    'SELECT id, text, idChapter, idTarget FROM choices  WHERE idChapter=?';
  const sqlValues = [idChapter];
  const [choices] = await db.query(sql, sqlValues);

  if (choices.length) {
    res.json(choices);
  } else {
    res.status(404).send('404 not found');
  }
});

app.listen(5050, () => {
  console.log('Ravsgalat API now available on http://localhost:5050 !');
});
