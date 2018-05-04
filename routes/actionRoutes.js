const express = require('express');

const aM = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    aM
        .get(id)
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});