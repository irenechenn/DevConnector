const express = require('express');

const app = express();

// create a single end point to test out
app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
