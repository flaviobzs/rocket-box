import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import BoxController from './app/controllers/BoxController';
import FileController from './app/controllers/FileController';

const routes = Router();

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

routes.post(
  '/boxes/:id/files', // esse id é pego do usuario logado numa aplicação (middleware)
  multer(multerConfig).single('file'), // enviar apenas um arquivo por ver (single('nomeDoCampo')) - varios (array(''))
  FileController.store
);

export default routes;
