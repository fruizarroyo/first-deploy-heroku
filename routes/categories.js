const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'spring collection',
      id: '1',
    },
    {
      name: 'fall collection',
      id: '2',
    },
    {
      name: 'summer collection',
      id: '3',
    },
    {
      name: 'winter collection',
      id: '4',
    },
  ]);
});
module.exports = router;
