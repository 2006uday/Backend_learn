// const express = require('express')
// const app = express()

// // ! is line ka matlbe hai ki hamm route folder sai auth-route.js file mang rhai hai jismai require kai ander file ka path addres hai.  
// const router = require('./router/auth-route')

// //? Mount the Router: To use the route in your main Express app, you can "mount" it at a specific URL prefix.
// app.use('/auth',router)


// app.get ('/', (req,res)=>{
//     res.send("hello iam home page!.")
// })

// app.listen(5510)
const express = require('express');
const app = express();

const authRoutes = require('./router/auth-route'); // Adjust path as per your folder structure

// Use JSON body parser middleware globally
app.use(express.json());

// Mount auth routes at /auth
app.use('/auth/uday', authRoutes);

// Basic root route for testing
app.get('/', (req, res) => {
  res.send('hello everyone');
});

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});