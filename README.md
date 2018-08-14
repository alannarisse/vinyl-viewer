# Vinyl Viewer

This is a simple api for storing, adding and retrieving a list of vinyl I own at home or want to buy in the near future. 

This service runs on heroku using the mongoLab add on.

This was created with the help of Jean Weatherwax's great class on Skill Share https://www.skillshare.com/classes/Build-an-API-with-Node-Express-and-MongoDB


## Local Installation Instructions
- clone or download this repo
- You'll need the following. run these to see if you have them
	- <code>which xcode-select</code>
	- <code>which brew</code>
	- <code>which git</code>
	- <code>node -v</code> install this via the nodejs website.
	- <code>npm install -g nodemon</code>
    - <code>brew install mongodb</code>
    - <code>cd /</code>
	- <code>sudo mkdir -p data/db</code>
	- <code> sudo chown -R $USER data/db</code>
- run npm install
- run in terminal: <code>mongod</code>
- run in another terminal tab: <code>nodemon</code>


## Heroku Installation instructions
- create a Heruko account. You'll need to enter a credit card in order to use the Mongo Lab addon.
- Go to https://dashboard.heroku.com/new-app to create a new app. name it something, click the "Create app" button
- Using the instructions given on your heroku app page, set up a git repo for this project and set one of the remotes to heroku
- Locally run in a terminal:<code> heroku addons:create mongolab</code>
- to verify, run in a terminal: <code>heroku config:get MONGODB_URI</code>code>
- If you've got your git remote set, and your databsae is all set up, just run in a terminal: <code>git push heroku master</code>. This will build and deploy the app. go to to by copying and pasting the app's url and add on <code>/api/albums</code> to the url.
- Use Postman to populate the database (see schema in models/albums).
- Enjoy the crud-y goodness!

## The future
I'm building this with the idea of making a pretty website to display my abums, then tie in another music api to get more info about the albums. Then I can enjoy an enhanced listening and learning experience. I also want to use it to include albums I want to own but don't.
