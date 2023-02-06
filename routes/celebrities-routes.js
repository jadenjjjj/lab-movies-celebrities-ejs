const router = require('express').Router()

const Celebrity = require('./models/Celebrity.model.js')

router.get('/new', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

