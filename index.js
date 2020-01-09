const express = require("express");
const connectDB = require("./config/db");
const port = process.env.PORT || 4000
const app = express();

app.use(express.json({ extended: false}));
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

connectDB();

// app.get('/', (req, res) => res.send('Welcome to this URL Shortener'))
app.listen(port, () => console.log(`Example App listening on port ${port}`))