const express = require('express');
const app = express();

app.use('/api', require('./routes/index'));

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});
