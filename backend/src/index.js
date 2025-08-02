const express = require('express');
const cors = require('cors'); // ← добавили

const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors()); // ← добавили
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is working ✅' });
});

app.use('/api/tasks', taskRoutes);

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
