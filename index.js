const express = require("express");
const connectDB = require("./config/db");
const port = process.env.PORT || 4000
const app = express();

app.use(express.json({ extended: false}));

connectDB();

app.get('/', (req, res) => res.send('Welcome to this URL Shortener'))
app.listen(port, () => console.log(`Example App listening on port ${port}`))