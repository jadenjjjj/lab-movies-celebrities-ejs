const router = require('express').Router()

const Celebrity = require('./models/Celebrity.model.js')

router.get('/new', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

Celebrity.post('/', (req, res, next) => {
    Celebrity.create(req.body)
  .then( newCelebrity => {
    console.log("New celeb: ", newCelebrity);
  } )
  .catch(error => console.log('Err while creating new celebrity: ', error));
})

// get celebrities from the DB

Celebrity.get('/', (req, res, next) => {
    Celebrity.find()
    .then( allCelebrities => {
      // views/celebrities/celebrities.hbs 
      res.render('celebrities/celebrities', { allCelebrities })
    } )
    .catch(err => console.log('Err while getting all celebrities: ', err));
  })

  module.exports = Celebrity;