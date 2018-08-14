let mongoose = require('mongoose');
// This is where we serve our DB!
mongoose.connect(
    process.env.PORT ||
    'mongodb://localhost/albums'
);


let Album = require('./album'); // name of our file.

module.exports.Album = Album;