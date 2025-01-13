const shortid = require('shortid');
const URL = require('../models/url');


async function handleGenerateNewShortUrl(req, res){

  const body = req.body;

  if(!body.url) return res.status(400).json({error: 'URL is required'});

  const shortID = shortid();

  await URL.create({
    shortId: shortID, 
    redirectUrl: body.url,
    visitHistory: []
  });

  return res.status(201).json({shortUrl: shortID});
}

module.exports = {
  handleGenerateNewShortUrl,
}