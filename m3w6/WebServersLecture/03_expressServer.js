//Express is a routing and middleware web framework

// How can we hadle multiple routes?
// Multiple paths?
// Dynamic Content?
// Error handling?
const path = require('path');
const express = require('express');
const morgan = require('morgan');
// Console log each request type being made to the server
// Serve dynamic content
// ...and more!
// Middleware!
// View Engine!
// pug, jade, => EJS => Embedded Javascript

// Allows you to use express methods
const app = express();

const user = {
  name: "Bryan Gomes"
}

// View engine
app.set('view engine', 'ejs');
// All files must end in .ejs and they must be in the views folder

// Middleware
app.use(morgan('dev'));

// Anytime we server content to a page -> images, html, gifs
// app.use(express.static('public'));
const port = 3000;
// How do we handle different types of requests?
// GET -> Made when you want to retrieve or view information
// POST -> Made when you want to update/edit information -> Login, Register, Submit a new post/photo
// req = request
// res = response
app.get('/', (req, res) => {

  // res.send({key: "value"});
  // We can send static files via express
  // res.sendFile(path.join(__dirname, "index.html"));

  // Template variables
  // Pass in objects into ejs files
  res.render('intro', {user: null});
})

app.get('/dashboard', (req, res)=> {
  res.render('intro', {user: user})
})

// http://localhost:3000/lionking/animated
// { movie: 'lionking', genre: 'animated' }
// Pass information via the path, via params
// Any paths invovling params, should be rendered last
app.get('/:movie', (req, res)=> {
  console.log(req.params);
  const templateVars = {
    movieName: req.params.movie,
  }
  res.render('params', templateVars);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})