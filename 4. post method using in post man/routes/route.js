const express = require('express')
const Route = express.Router()
const login = require('../controller/form')

Route.route('/login-form').post(login.loginForm);

module.exports = Route  