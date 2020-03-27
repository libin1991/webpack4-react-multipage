import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
ReactDOM.render(
    <div>
        <h1>你好，我是index首页</h1>
        <a href='/home.html'>home</a>
        <a href='/about.html'>about</a>
    </div>,
    document.getElementById('root')
)