const express = require('express');
const path = require('path');

const config = {
  port: 3000
};

const app = express();
const webRoot = path.resolve(__dirname, '../client/build');

app.use("/", express.static(webRoot));

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));
