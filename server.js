const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
