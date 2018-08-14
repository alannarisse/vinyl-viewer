// set up mongoose
let mongoose = require('mongoose'),
    Schema = mongoose.Schema;


let AlbumSchema = new Schema({
	// list model properties
	title: String,
	artist: String,
	year: Number, //year originally released
	owned: Boolean, // do I own this?
	imgUrl: String
});

let Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;