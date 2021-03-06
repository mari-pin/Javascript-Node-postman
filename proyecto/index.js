const express = require('express')
const debug = require('debug')('app:main')
const {Config}= require('./src/config/index')
const {UsersAPI}  = require('./src/users/index');
const {ProductsAPI}  = require('./src/products/index');
const{IndexAPI, NotFoundAPI} = require('./src/index/index')


const app = express();

app.use(express.json())

//modulos
IndexAPI(app)
ProductsAPI(app)
UsersAPI(app)
NotFoundAPI(app)

app.delete('/:id', (req,res)=>{
    const user = Service.getUser(req.params.id);
    let {params:{id}}= req;
    res.send(Service.delete(id))
})

app.listen (Config.port, ()=>{
    debug(`servidor abierto en el puerto${Config.port}`)
})