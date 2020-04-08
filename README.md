## [HealthyBites](https://healthybites.herokuapp.com/)

Front end design concept of an online store where users can choose from a list of healthy meal options for purchase. This is an initial design concept with the goal of showing the power of React and Redux to manage state along with a concrete responsive UI design.

Feel free to head on over to Heroku to take a look: https://healthybites.herokuapp.com/

<br>

## Features:

On the items page users have the ability to:

- Select healthy meal options and add to their cart. Each item has calorie information but I think this can be further extended to include more health related information users might be interested in.

On the shopping cart page:

- Users are able to increase/decrease quantities and remove items from their cart
- The checkout box is not functional, only a design concept for now. This could be hooked up to a 3rd party service like Stripe to provide payment services in the future.

On the header:

- Users are provided with a visual notification of how many items are in their cart at all times

<br>

## Tech Stack

- React/Redux (Project bootstrapped with create-react-app)
- React router
- SASS
- Materialize CSS framework (I find this framework simple and easy to use and their documentation is awesome)
- Jest test framework (Tests cover Redux action creators and reducer functions. React components are essentially triggering Redux functions so I think this is sufficient for now.)

<br>

## Want to run the application locally?

Go into the project directory and run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs the tests.

<br>

## Ideas for improvement

- A reviews/rating section would be useful in helping users choose meal options
- Currently the user can only click the + and - signs to increase/decrease quantities. Users should have the option to enter the quantity in the case the user wants to add a large quantity for example.
