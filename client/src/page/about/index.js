import '../../public/css/reset.css'
import '../../public/css/common.css'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
ReactDOM.render(
    <h2>你好，我是category首页</h2>,
    document.getElementById('root')
)
console.log('process.env.test')