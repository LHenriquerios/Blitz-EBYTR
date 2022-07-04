import React, { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [statusId, setStatusId] = useState(1);

  // GET request
  async function getTasks() {
    try {
      const response = await fetch('http://localhost:3031/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error');
    }
  }

  async function getStatus() {
    // GET request status
    fetch('http://localhost:3031/status')
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }

  async function postNewTask() {
    // POST request tasks
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: newTask, statusId }),
    };
    fetch('http://localhost:3031/tasks', requestOptions)
      .then((response) => response.json())
      .then((data) => setNewTask(data));
  }

  async function deleteTask(id) {
    const response = await fetch(`http://localhost:3031/tasks/${id}`, { method: 'DELETE' });
    const data = await response.json();
    // eslint-disable-next-line no-alert
    alert(data.message);
    setNewTask('');
  }

  useEffect(() => {
    getTasks();
    getStatus();
  }, [newTask]);

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>{`Tarefa: ${task.contents}`}</li>
            <li>{`Status: ${task.statusId}`}</li>
            <button type="submit" onClick={() => deleteTask(task.id)}>Excluir</button>
            <br />
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
            value={newTask}
            onChange={({ target: { value } }) => setNewTask(value)}
          />
        </label>
        <label htmlFor="status">
          <select name="status" onChange={({ target: { value } }) => setStatusId(value)}>
            {status.map((e) => (
              <option key={e.id} value={e.id}>{ e.type }</option>
            ))}
          </select>
        </label>
        <button type="submit" onClick={() => postNewTask()}>Enviar</button>
      </div>
    </>
  );
}

export default App;
