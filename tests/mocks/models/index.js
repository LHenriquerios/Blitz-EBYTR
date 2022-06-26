const Tasks = require('./tasks.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }

  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const Task = {
  create: async (data) => mockCreate(Tasks, data),
  findAll: async () => Tasks,
};

module.exports = Task;