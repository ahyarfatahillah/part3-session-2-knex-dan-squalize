const { UserController } = require('../controllers');


const expressRouter=require('express').Router()
class UserRouter{
    router
    constructor(){
        this.router=expressRouter
        this.setupRouters();
    }
    setupRouters(){
        this.router.get('/users', UserController.getUser)
        this.router.post('/user', UserController.createUsers)
        this.router.put('/user/:id', UserController.editUsers)
        this.router.delete('/user/:id', UserController.delateUser)
    }
}
module.exports=UserRouter