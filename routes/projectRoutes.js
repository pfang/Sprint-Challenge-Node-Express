const express = require('express');

const pM = require('../data/helpers/projectModel');
const actionRoutes = require('./actionRoutes');

const router = express.Router();

router.get('/', (req, res, next) => {
    pM
        .get()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    pM
        .get(id)
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});