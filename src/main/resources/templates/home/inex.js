const express = require('express'); // express 임포트
const app = express(); // app생성
const port = 5000;

const bodyParser = require("body-parser");
const { Member } = require("./member/join");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());