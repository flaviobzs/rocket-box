import File from '../schemas/File';
import Box from '../schemas/Box';

class FileController {
  async store(req, res) {
    const box = await Box.findById(req.params.id); // identificar qual box o arquivo está vinculado

    const file = await File.create({
      title: req.file.originalname, // nome original do arquivo
      path: req.file.key, // nome gerado para identificar o arquivo
    });

    box.files.push(file); // incluir o arquivo no array que indica a vinculação com os boxes

    await box.save(); // salvar a informação inserida

    // req.io.sockets.in(box._id).emit('file', file);

    return res.json(file);
  }
}

export default new FileController();
