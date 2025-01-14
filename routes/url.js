const express = require('express');
const { handleGenerateNewShortUrl, handleUrlAnalytics} = require('../controllers/url');
const router = express.Router();

router.post('/', handleGenerateNewShortUrl);

router.get('/analytics/:shortId', handleUrlAnalytics);

module.exports = router;