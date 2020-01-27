import Box from '../schemas/Box';

class BoxController {
  async store(req, res) {
    const box = await Box.create({ title: req.body.title });

    return res.json(box);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } }, // ordenar files por datas decrescentes
    });

    return res.json(box);
  }
}

export default new BoxController();
