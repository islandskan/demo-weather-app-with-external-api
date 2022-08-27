# Demo: Weather app

A demo version of a weather app that fetches weather data for the current location of the client. Built with vanilla JavaScript, Express.js, and [the weatherbit api](https://www.weatherbit.io/).

<div align="center">
  <h3>
    <a href="https://islandskan-weather-app.herokuapp.com/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/islandskan/demo-weather-app-with-external-api">
      Solution
    </a>
    <span> | </span>
    <a href="https://www.weatherbit.io/">
      Weatherbit API
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Features](#features)
    -   [Features of the frontend](#features-of-the-frontend)
    -   [Features of the backend](#features-of-the-backend)
-   [Built With](#built-with)
-   [To do](#to-do)
-   [License](#licence)
-   [Contact](#contact)
-   [Acknowledgments](#acknowledgments)

## Features

### Features of the frontend:

-   Widget displaying the current city and country code of the client.
-   Widget displaying the current month, day, and weekday.
-   Widget changing background color based on what time it is(morning, daylight, evening, or nigth).
-   Widget displaying different weather icons based on the weather of the current location.
-   Widget displaying the current tempterature of the current postion(at the moment, it is in celcius degrees).
-   Widget displaying a brief discription of the current weather.

### Features of the backend:

-   Server built with Express.js is handling the api requests.
-   Server is handling the routes(the endpoint). - Server is handling the caching.
-   Server is handling the rate limiting.
-   Server is handling the the query params
-   Server is accessing the environment variables.
-   Server serves the static(frontend) part of the app.
-   Server is enabling cors.

## Built with

-   [Express.js](https://www.npmjs.com/package/express)
-   [Weatherbit](https://www.weatherbit.io/)

## To do

-   [ ] Fix error handling, if data can't be fetched.
-   [ ] Fix error handling, if browser isn't compatible with or navigator.geolocation isn't enabled.
-   [ ] Develop do client can display more than one widget with the weather data from different locations.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Contact

-   GitHub [@islandskan](https://github.com/islandskan)
-   LinkedIn [Sigridur Eggertsdottir](https://www.linkedin.com/in/sigridureggertsdottir/)

## Acknowledgment

### Sources

-   [Weatherbit documentation](https://www.weatherbit.io/api)
-   [Traversy Media, build an API proxy server](https://www.youtube.com/watch?v=ZGymN8aFsv4)
-   [How to Build a weather app using JavaScript](https://www.studytonight.com/post/how-to-build-a-weather-app-using-javascript-for-complete-beginners)
-   [Mozilla docs - GeolocationCoordinates](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates)
-   [Mozilla docs - Using the geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
-   [Geeks for geeks - How to build a node.js proxy server](https://www.geeksforgeeks.org/how-to-build-a-node-js-proxy-server)

### Plugins/modules/other software

-   [Postman](https://www.postman.com/)
-   [Vercel](https://vercel.com/)
-   [npm - nodemon](https://www.npmjs.com/package/nodemon)
-   [npm - apicache](https://www.npmjs.com/package/apicache)
-   [npm - cors](https://www.npmjs.com/package/cors)
-   [npm - dotenv](https://www.npmjs.com/package/dotenv)
-   [npm - express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
-   [npm - needle](https://www.npmjs.com/package/needle)
