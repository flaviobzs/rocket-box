import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // entender requisiçoes em formato .json
    this.server.use(express.urlencoded({ extended: true })); // permitir envio de arquivos na aplicação
    this.server.use(
      '/files', // toda vez que a rota /files for acessada
      express.static(path.resolve(__dirname, '..', 'tmp')) // será buscado os arquivos do diretorio tmp
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
