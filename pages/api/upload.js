import { uploadFile, multer } from '../../utils/uploadToGCS';

const uploadHandler = (req, res) => {
  multer.single('file')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    uploadFile(req.file).then(() => {
      res.status(200).json({ message: 'File uploaded successfully' });
    });
  });
};

export default uploadHandler;
