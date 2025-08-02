let tasks = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Build a Task Manager', completed: false },
  ];
  
  const getAllTasks = (req, res) => {
    res.json(tasks);
  };
  
  const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  };
  
  const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
  
    const task = tasks.find((t) => t.id === parseInt(id));
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;
  
    res.json(task);
  };
  
  const deleteTask = (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((t) => t.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    const deleted = tasks.splice(index, 1);
    res.json({ message: 'Task deleted', task: deleted[0] });
  };
  
  module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
  };
  