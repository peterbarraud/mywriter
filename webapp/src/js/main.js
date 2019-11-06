import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {FnMessage} from './fnmessage';
// import Message from './alloallo'

let messageData = {
    color: "red",
    time: 15,
    value: "Allo, allo"
}

let greetings = [
    {"language": "English", "message": "Hallo, hallo"},
    {"language": "French", "message": "Allo, allo"},
    {"language": "Nihongo", "message": "Moshi, moshi"},
    {"language": "Hindi", "message": "Namaste, namaste"}
]

ReactDOM.render(
    <FnMessage value={greetings} mins={messageData.time} color={messageData.color}/>,
    document.getElementById('app')
)