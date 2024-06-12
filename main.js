const Server = require('./server')
const {UserRouter}=require('./routers');
const userRouter=new UserRouter()
const server = new Server([userRouter]);
server.start();