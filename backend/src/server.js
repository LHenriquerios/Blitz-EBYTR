require('dotenv').config();
const app = require('./api');

const PORT = process.env.API_PORT || 3031;

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
