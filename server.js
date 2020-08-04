const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log('Server started on port' + PORT));