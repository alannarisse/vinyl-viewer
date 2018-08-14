/** This is our server file! Where the magic happens. **/

// require express, for routing, and body parser, for form parsing
let express = require('express'),
    bodyParser = require('body-parser');

// connect to db models
let db = require('./models');

// make a new express app named "app".
let app = express();

app.use("/favicon.ico", express.static('public/favicon.ico')); 

// Body parser and encoding setup.
app.use(bodyParser.urlencoded({
    extended: true
}));

// get all
app.get('/api/albums', (req, res) => {
	db.Album.find((err, allAlbums) => {
		if (err) {
			console.log(`index error: ${err}`);
		} else {
			res.json({
				albums: allAlbums
			});
		}
	});
});

// get one
app.get('/api/albums/:id', (req, res) => {
	db.Album.findOne({
		_id: req.params.id
	}, (err, album) => {
		if (err) {
			console.log(`show error: ${err}`)
		}
		res.json(album);
	});
});

// create new 
app.post('/api/albums', (req, res) => {
	let newAlbum = new db.Album(req.body); //body parrser library
	newAlbum.save((err, album) => {
		if (err) {
			console.log(`save error: ${err}`);
		}
		console.log(`saved new album: ${album.title}`);
		res.json(album);
	})
});

// delete one
app.delete('/api/albums/:id', (req, res) => {
	let albumId = req.params.id;
	db.Album.findOneAndRemove({
		_id: albumId
	})
	.populate('album')
	.exec((err, deletedAlbum) => {
		if (err) {
			console.log(`error on deletion: ${err}`)
		}
		res.json(deletedAlbum);
	});
});

// update one
app.put('/api/albums/:id', (req, res) => {
	let albumId = req.params.id;
	db.Album.findOne({
		_id: albumId
	}, (err, foundAlbum) => {
		if (err) {
			console.log(`couldn't find the creature`)
		}
		foundAlbum.title = req.body.title || foundAlbum.title;
		foundAlbum.artist = req.body.artist || foundAlbum.artist;
		foundAlbum.year = req.body.year || foundAlbum.year;
		foundAlbum.owned = req.body.owned || foundAlbum.owned;
		foundAlbum.imgUrl = req.body.imgUrl || foundAlbum.imgUrl;
		console.log(`updating: ${foundAlbum.title}`);
		// save it
		foundAlbum.save((err, album) => {
			if (err) {
				console.log(`update error: ${err}`);
			}
			console.log(`update was saved: ${album.name}`)
			res.json(album);
		})
	});
});

// This is where we serve our API!
app.listen(process.env.PORT || 5000, () => {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
