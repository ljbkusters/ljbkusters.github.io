/*
 * server.js
 * Copyright (C) 2020 luc <luc@arch-book>
 *
 * Distributed under terms of the MIT license.
 */

var express = require('express');
var app = express()
var server = require('http').createServer(app);
//var io = require('socket.io').listen(server); // Internet Sockets
const port = 8000;
var path = require('path');
//var fs = require('fs');
server.listen(process.env.PORT || port); // set the port
console.log('Server running...');

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
})
app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, '/js')));
//app.use(express.static(path.join(__dirname, '/html')));
