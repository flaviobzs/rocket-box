import mongoose from 'mongoose';

const BoxSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [
      // array contendo varios arquivos []
      {
        type: mongoose.Schema.Types.ObjectId, // relacionamento com outro model
        ref: 'File',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Box', BoxSchema);
