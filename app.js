/*Importar as configurações do servidor*/
const app = require('./config/server');

/*Parametrizar a porta*/
app.listen(80, () => { console.log('Servidor online'); });