const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = 4000

const visitedCookieName = 'visited'
const visitedCookieValue = 'yes'

const oneMinute = 1000*60

// use the cookie parser package, to parse cookies ;)
app.use(cookieParser())

// show content based upon cookie existing or not
app.get('/', (req, res) => {
  // if request contains the cookie, say 'Welcome back!'
  if (req.cookies[visitedCookieName] === visitedCookieValue) res.send('Welcome back!')
  // if request does not contain the cookie, say 'Welcome!'
  else res.cookie(visitedCookieName, visitedCookieValue, {maxAge: oneMinute, httpOnly: false}).send('Welcome!')
})

// launch the server
app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`)
})
