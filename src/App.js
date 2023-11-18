import React, { useState } from 'react';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  return (
      <div className="App">
        <h1>Список дел</h1>
        <div>
          <input
              type="text"
              placeholder="Добавьте новую задачу"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={handleAddTask}>Добавить</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
              <ol key={index}>{task}</ol>
          ))}
        </ul>
      </div>
  );
}

export default App;
