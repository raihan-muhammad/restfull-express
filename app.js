const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected'));

app.listen(process.env.PORT, () => {
  console.log(`Server Menggunakan port ${process.env.PORT}`);
});
