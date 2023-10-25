const { Storage } = require('@google-cloud/storage');
const Multer = require('multer');

const storage = new Storage({
  keyFilename: 'key.json', // Path to your Google Cloud Storage credentials
  projectId: 'your-project-id', // Replace with your project ID
});

const bucket = storage.bucket('your-bucket-name'); // Replace with your bucket name

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

const uploadFile = async (file) => {
  const blob = bucket.file(file.originalname);

  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream.on('error', (err) => {
    console.error(err);
  });

  blobStream.on('finish', () => {
    // The file has been uploaded to Google Cloud Storage
    console.log('File uploaded to Google Cloud Storage');
  });

  blobStream.end(file.buffer);
};

module.exports = { uploadFile, multer };
