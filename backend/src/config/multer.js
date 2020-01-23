import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  dest: path.resolve(__dirname, '..', '..', 'tmp'), // local onde os arquivos virão do upload
  storage: multer.diskStorage({
    // metodo indica local para SALVAR arquivos (opções: banco, nuvem)
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp')); // 1 paramento: ouve algum erro? //2 parametro: destino do arquivo
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        // gerar 16bytes de caracteres aleatorios
        if (err) cb(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`; // cria uma nova propriedade para o arquivo

        cb(null, file.key);
      });
    },
  }),
};
