// const express = require('express');
import express from 'express'
import { signupPage, signup, loginPage, login,findUser } from '../controller/userController.js'

const router = express.Router();

router.get("/users", findUser)
router.get('/signup', signupPage);
router.post('/signup', signup); // For actual signup (POST form data)
router.get('/login', loginPage);
router.post('/login', login);

export default router;
