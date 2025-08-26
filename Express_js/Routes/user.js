const express = require('express');
const router = express.Router();  
router.get('/', (req, res) => {
  res.send('This is user Page');
});
router.get('/submit', (req, res) => {
  res.send('This is Express submit Page');
});
module.exports = router;
