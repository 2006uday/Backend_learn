const express = require('express')
const Routes = express.Router();
const form = require('../controller/form')


Routes.route('/form').get(form);

module.exports = Routes;