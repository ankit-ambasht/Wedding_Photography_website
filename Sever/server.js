// backend/server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

app.get('/images', (req, res) => {
  fs.readdir('uploads/', (err, files) => {
    if (err) return res.sendStatus(500);
    res.json(files.map(f => `/uploads/${f}`));
  });
});

app.listen(5000, () => console.log("Server started at http://localhost:5000"));
