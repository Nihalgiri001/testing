const express = require('express');

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: 'Rahul', age: 20, department: 'CSE' },
  { id: 2, name: 'Priya', age: 21, department: 'CSE' }
];

var id_counter = 3;

app.get('/students', (req, res) => {
  res.json(students);
});


app.post('/students', (req, res) => {
  const student = {
    id: id_counter++,
    ...req.body
  };

  students.push(student);
  res.status(201).json(student);
});


app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Not found' });
  }

  students[index] = { id, ...req.body};
  res.json(students[index]);
});


app.delete('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Not found' });
  }
  id_counter--;
  students.splice(index, 1);
  res.json({ message: 'Deleted successfully' });
});

if (require.main === module) {
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
}

module.exports = app;