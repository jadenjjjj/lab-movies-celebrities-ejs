const router = require('express').Router()

const Movie = require('../models/movie-model');
const Celebrity = require('../models/celebrity-model');

movieRouter.get('/new', (req, res, next) => {
  Celebrity.find()
  .then( celebritiesFromDB => {
    res.render('movies/new-movie', { celebritiesFromDB });
  })
  .catch( err => console.log("Error while displaying a form to create a movie: ", err))
})

movieRouter.post('/', (req, res, next) => {
    Movie.create(req.body)
    .then( newMovie => { 
        res.redirect('/movies')
  } )
  .catch( err => console.log("Error while creating a movie: ", err))
})

//get all movies from db

movieRouter.get('/', (req, res, next) => {
    Movie.find()
    .then( moviesFromDB => {
      res.render('movies/movies', { moviesFromDB });
    })
    .catch( err => console.log("Error while displaying all the movies: ", err))
  })

// delete route
movieRouter.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/movies')
    })
    .catch( err => console.log("Error while deleting a movie: ", err))
  })

// edit the movie
movieRouter.get('/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(foundMovie => {
      Celebrity.find()
      .then(allCelebs => {
        allCelebs.forEach(oneCeleb => {
          foundMovie.cast.forEach(oneCastMember => {
            // console.log("what is this: ", oneCastMember);
            if(oneCeleb._id.equals(oneCastMember)){
              oneCeleb.isInCast = true;
            }
          })
        })
        res.render('movies/edit-movie', { movie: foundMovie, allCelebs })
      })
    })
    .catch( err => console.log("Error while getting the movie for the edit form: ", err))
  })

//save update about the movie
movieRouter.post('/:movieId/update', (req, res, next) => {
    // we can use 'req.body' since we used the same names as in our MOVIE model
    Movie.findByIdAndUpdate(req.params.movieId, req.body)
    .then( updatedMovie => {
      // if everything is fine, take me back to the details page so we can see the changes we made
      res.redirect(`/movies/${req.params.movieId}`);
    } )
    .catch( err => console.log("Error while getting updating the movie: ", err))
  })

  // details of page

  movieRouter.get('/:movieId', (req, res, next) => {
    Movie.findById(req.params.movieId).populate('cast')
    .then( theMovie => {
      res.render('movies/movie-details', { theMovie })
    } )
    .catch( err => console.log("Error while displaying movie details: ", err))
})

module.exports = movieRouter;