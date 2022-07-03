import React, { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {

    async function fetchData () {
      try{
    const response =  await fetch('http://localhost:3001/tasks');
    const data = response.json()
    console.log(data);
    setTasks(data);
    }
      catch (error) {
        console.log(error);
  }
}
  }, []);

  return (
    <>
      <ul>
        {console.log(tasks)}
        {tasks.map(task => (
          <><li key={task.id}>{`Tarefa: ${task.contents}`}</li>
          <li key={task.id}>{`Status: ${task.status}`}</li><br/></>
        ))}
      </ul>
    </>
  );
}

export default App;
