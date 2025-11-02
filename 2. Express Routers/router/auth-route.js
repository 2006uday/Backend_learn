// const express = require('express')
// // const app = express()
// const routes = express.Router()



// // ? In express.js, express.Router() is a mini express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
// // ? Use the express.Router class to create modular, mountable route hanlders. A route instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".

// routes.use(express.json())

// routes.get('/login',(req, res)=>{
//     res.json({message: "hello world in side of the login page "})
// });


// //! Iskai help sai ham route folder kai ander auth-route.js file ko access kar pa rhai hai isko na liknai sai server down hojayga! 
// module.exports = routes

// const express = require('express');
// const routes = express.Router();

// routes.use(express.json());

// routes.get('/login', (req, res) => {
//   res.send( 'message: "hello world inside the login page" ');
// });

// module.exports = routes;

const express = require('express');
const Routes = express.Router();

// If you expect to handle JSON body in this router, uncomment this middleware
// routes.use(express.json());

// Define GET /login route inside router
Routes.get('/', (req, res) => {
  res.json({ message: "hello world inside the login page" });
});

Routes.route('/login').get((req,res)=>{
    res.send("hello world")
})
// Export the router object (uncommenting this if needed was your mistake)
module.exports = Routes;
