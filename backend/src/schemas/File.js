import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true }, // fazer o carregamento do campo virtual quando o campo for convertido para OBJETO
    toJSON: { virtuals: true }, // fazer o carregamento do campo virtual quando o campo for convertido para JSON
  }
);

FileSchema.virtual('url').get(function() {
  // nao pode ser arrow por conta do this.path
  // criação de uma campo virtual (nao existe no banco) adequar dados a ser retornado
  // const url = process.env.URL || 'http://localhost:3333';
  return `${url}/files/${encodeURIComponent(this.path)}`; // transformar texto em formato de URL
});

export default mongoose.model('File', FileSchema);
