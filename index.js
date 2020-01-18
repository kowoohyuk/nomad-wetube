// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send(`Welcome to Home!!`);

const handleProfile = (req, res) => res.send(`You are on my Profile!`);
//
const middleWare = (req, res, next) => {
  console.log(`I'm Middlewares.`);
  next();
}

//특정 라우트만 미들웨어를 사용할 때!
//app.get('/', middleWare, handleHome);

//모든 라우트가 미들웨어를 사용하게 만들 때!
app.use(middleWare);

app.get('/', handleHome);
// 상위 라우트를 제외할 때는 위치로 제어한다. 
//app.use(middleWare);

app.get('/profile', handleProfile);
 
app.listen(PORT, handleListening);
