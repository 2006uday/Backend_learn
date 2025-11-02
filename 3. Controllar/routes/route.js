const express = require('express')
const Routes = express.Router()
const Login = require('../controller/login')
const register = require('../controller/regaister')

Routes.route('/register').get(register)
Routes.route('/login').get(Login.login)
Routes.route('/login/login-detail').get(Login.LoginDetail)

module.exports = Routes