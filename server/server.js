// 此处的代码 会用babel处理
import React from "react"
const fs = require('fs-extra');
import { renderToString } from "react-dom/server"
import path from 'path'
import Koa from "koa"
import Static from './util/static'
// import Static from 'koa-static'
import LRU from 'lru-cache';
const Router = require('koa-router');
const router = new Router();
// const app = new Koa()
const chalk = require('chalk');



import express from 'express';
import compression from 'compression';
const port = process.env.PORT || 8888;


const app = express();
app.use(compression());
app.use('/js', express.static(path.join(__dirname, '../dist/js')));
app.use('/css', express.static(path.join(__dirname, '../dist/css')));
app.get('*', (req, res) => {
  const content = renderToString(<h1>test</h1>);
  const { url } = req;
  // log(url);
  const tpl = readFileContent(`./dist/${url}`);
  return res.end(tpl);
});

app.listen(port, () => {
  console.log(`施主，莫急，${port}号技师为您服务！！！`)
})



// koa 静态资源 使用

// app.use((ctx, next) => {
//   console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
//   next()
// });


function readFileContent(pathStr) {
  pathStr = path.resolve(process.cwd(), pathStr)
  if (fs.existsSync(pathStr) && fs.statSync(pathStr).isFile()) {
    const result = fs.readFileSync(pathStr).toString()
    return result
  }
}

// function log(str) {
//   console.log(chalk.red.bold('-----------------'));
//   console.log(str)
// }

// router.get("*", async (ctx, next) => {
//   const content = renderToString(<h1>test</h1>);
//   const { url } = ctx.request;
//   // log(url);
//   const tpl = readFileContent(`./dist/${url}`);
//   ctx.response.body = tpl;
//   await next();
// });

// app.use(router.routes()).use(router.allowedMethods())

// console.log(path.join(process.cwd(), 'dist/'));

// app.use(Static(path.join(process.cwd(), 'dist/')))





