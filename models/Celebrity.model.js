/*
## Iteration #2: The `Celebrity` model

Our first step is to create the `Celebrity` model and add some celebrities in our database.

The `Celebrity` model should have:

- `name` - String (like _Tom Cruise, Beyonce, Daffy Duck,_ etc.)
- `occupation` - String (what the celebrity does, why they are famous. For example _actor, singer, comedian_, or you can put _unknown_ if your celebrity is someone like Kim Kardashian)
- `catchPhrase` - String (every celebrity needs a good catch phrase. Well maybe not all of them have one in real life, but all of _our_ celebrities will have a catch phrase. This can be pretty much anything.)

Go ahead and locate the `Celebrity.model.js` model file in the `models` folder. Using schema, create the `Celebrity` model with the above mentioned properties. _Don't forget to export the model._ 2. In the `Celebrity.model.js` model file:

<br>
*/

const e = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const celebritySchema = new Schema({
    name: {
        type: String
    },
    occupation: {
        type: String
    },
    catchPhrase: {
        type: String
    }
})

//create collection
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
