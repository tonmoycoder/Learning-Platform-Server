const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/Categories.json');
const courses = require('./Data/Courses.json');

app.get('/', (req, res) => {
  res.send('Course API Running');
});

// send full category info

app.get('/category', (req, res) => {
  res.send(categories);
});

// send full courses info

app.get('/courses', (req, res) => {
  res.send(courses);
});

// category Filter

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '06') {
    res.send(courses);
  } else {
    const category_filter = courses.filter((sc) => sc.category_id === id);
    res.send(category_filter);
  }
});

// find courses by id

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selected_courses = courses.find(n => n._id === id);
  res.send(selected_courses);
});

app.listen(port, () => {
  console.log('Course Server Running on port', port);
});
