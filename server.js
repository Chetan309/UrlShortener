const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrls');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/urlShortner', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls: shortUrls });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.post('/shortUrls', async (req, res) => {
  try {
    await ShortUrl.create({ full: req.body.fullUrl });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create short URL");
  }
});

app.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (!shortUrl) return res.sendStatus(404);

    shortUrl.clicks++;
    await shortUrl.save();

    res.redirect(shortUrl.full);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing request");
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
