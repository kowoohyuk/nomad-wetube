// const express = require('express');
import express from "express";
import logger from "morgan";
import helmet from "helmet";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send(`Welcome to Home!!`);

const handleProfile = (req, res) => res.send(`You are on my Profile!`);

app.use(helmet());
app.use(logger("dev"));

app.get('/', handleHome);

app.get('/profile', handleProfile);
 
app.listen(PORT, handleListening);
