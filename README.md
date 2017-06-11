# Rosnovsky.us

![Current Build](https://travis-ci.org/rosnovsky/portfolio.svg?branch=master)


## Portfolio and Showcase

Here's my portfolio and showcase project. It's been in the works for a year or so, and it's quite work in progress still. You can rewind the history of the pages and the tool to see its evolution, but I'd suggest just exploring the current version. 

## Tech

This app works as a `Node.js` application (Node 7, haven't bumped it up to the latest one yet) with `Express` used for routing. I'm using various controllers for certain routes before I serve the users a view they're expecting. Views are build with `Pug` (ex-`Jade`), styling is built with `Stylus`. 

I request certain pieces of data from 3rd party APIs (`Google Maps`, `Google Books`, `Fitbit`, `Wakatime`). Some of these APIs require authentication via "secret keys" and such. For this, I'm using `dotenv` package and store this sensitive information in a file, excluded from git. 

## Tools

Since `Stylus` requires compiling, theres `Gulp` in place. For more convenient development, I've implemented `browser-sync` and `nodemon` in `Gulp` (both in version-3.0 branch only for now), as well as image compression (for future use; all images you see on a website now are from third-party APIs)

Mocha is my unit testing framework of choice. 

I use `Bitbucket` as my git repository service of choice, and use their pipelines to make sure my builds pass. For `Github`, I have `Travis CI` in place. 

## Deployment

The site is being deployed to `Heroku` (with API keys stored securely as environment variables).
