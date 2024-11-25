const jsonServer = require('json-server');
const authMiddleware = require('./auth-middleware.js');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser); // JSON verileri işlemek için body-parser ekleyin
server.use(authMiddleware);
server.use(router);

const PORT = 3500;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});