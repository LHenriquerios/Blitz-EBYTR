import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log('error');
      }
    }
    fetchData();
  }, [newTask]);

  function postNewTask() {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: newTask, statusId: 1 }),
    };
    fetch('http://localhost:3001/tasks', requestOptions)
      .then((response) => response.json())
      .then((data) => setNewTask(data));
  }

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>{`Tarefa: ${task.contents}`}</li>
            <li>{`Status: ${task.statusId}`}</li>
            <br />

          </>
        ))}
      </ul>
      <div>
        <label htmlFor="contents">
          <input
            name="contents"
            type="text"
            placeholder="Digite sua tarefa"
            onChange={({ target: { value } }) => setNewTask(value)}
          />
        </label>
        <button type="submit" onClick={() => postNewTask()}>Enviar</button>
      </div>
    </>
  );
}

export default App;
