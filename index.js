require('dotenv').config()
const express =  require('express');
const massive = require('massive');

const ProdCtrl = require('./controllers/products_controller.js')

const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    console.log('connected to db')
    app.set('db', dbInstance)
}).catch(err => console.log(err));


app.post('/api/products', ProdCtrl.create)
app.get('/api/products', ProdCtrl.getAll)
app.get('/api/products/:id', ProdCtrl.getOne)
app.put('/api/products/:id', ProdCtrl.update)
app.delete('/api/products/:id', ProdCtrl.delete)




app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
})
