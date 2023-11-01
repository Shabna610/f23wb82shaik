const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('board', { title: 'Board Display' });
});

module.exports = router;

function calculateCellValue(row, col, totalRows, totalCols) {
    if (row === col) {
      return 1;
    } else if (row === col - 1) {
      return 2;
    } else if (row === col + 1) {
      return row;
    } else {
      return 0;
    }
  }
  
  module.exports = calculateCellValue;