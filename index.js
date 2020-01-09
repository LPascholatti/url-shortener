const express = require("express");
const port = process.env.PORT || 4000
const app = express();

app.use(express.json({ extended: false}));

app.listen(port, () => console.log(`Example App listening on port ${port}`))