# Rosnovsky.us

![Current Build](https://travis-ci.org/rosnovsky/portfolio.svg?branch=master)


## Portfolio and Showcase

Here's my portfolio and showcase project. It is available live online at [rosnovsky.us](https://rosnovsky.us). It's still work in progress. You can rewind the history of the pages and the tool to see its evolution, but I'd suggest just exploring the current version. 

## Tech

This app works as a `Node.js` application (Node 8) with `Express` used for routing. I'm using various controllers for certain routes before I serve the users a view they're expecting. The frontend of the page is built with latest `React` and consists of several components. In the near future, I will introduce `Redux` to the project for storing application state. 

I request certain pieces of data from 3rd party APIs (`Foursquare`, `Google Books`, `Fitbit`, `Wakatime`). Some of these APIs require authentication via "secret keys" and such. For this, I'm using `dotenv` package and store this sensitive information in a file, excluded from git. 

I use `Bitbucket` as my git repository service of choice, and use their pipelines to make sure my builds pass. For `Github`, I have `Travis CI` in place. 

## Deployment

The site is being deployed to `Heroku` (with API keys stored securely as environment variables).
