const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

/**
 * Posts a new entry into the feedback table using SQL
 */
router.post('/', (req, res) => {
    const newFeedback = req.body;
    console.log('req.body', req.body);
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
      VALUES ($1, $2, $3, $4);`;
    const values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]
    console.log('values:', values);
    pool.query(sqlText, values).then((result) => {
        console.log(`Added feedback to the database`, newFeedback);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    });
})

module.exports = router;