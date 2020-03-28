import React from "react"
import { renderToString } from "react-dom/server"
import path from 'path'
var minify = require('html-minifier').minify;
import LRU from 'lru-cache';
const fs = require('fs-extra');
const chalk = require('chalk');

import express from 'express';
import compression from 'compression';

const port = process.env.PORT || 8888;

import SSR_entry from '../client/src/page/ssr.entry'



function readFileContent(pathStr) {
  pathStr = path.resolve(process.cwd(), pathStr)
  if (fs.existsSync(pathStr) && fs.statSync(pathStr).isFile()) {
    const result = fs.readFileSync(pathStr).toString()
    return result
  }
}

function log(str) {
  console.log(chalk.red.bold('-----------------'));
  console.log(str)
  console.log(chalk.red.bold('-----------------'));
}

const app = express();
app.use(compression());
app.use('/js', express.static(path.join(__dirname, '../dist/js')));
app.use('/css', express.static(path.join(__dirname, '../dist/css')));
app.get('*', async (req, res) => {
  let { url } = req;
  if (url == '/') url = '/index.html';
  const App = SSR_entry[url];
  const { data } = await App.asyncDate();


  console.log(data.poilist);

  const content = renderToString(<App data={data.poilist} />);

  const tpl = readFileContent(`./dist/${url}`);
  const html = tpl.replace('<div id="root"></div>', `<div id="root">${content}</div><script>window.__INITIAL_STATE__ = ${JSON.stringify(data)}</script>`);
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置response编码为utf-8
  return res.end(minify(html, {
    collapseWhitespace: true
  }));
});

app.listen(port, () => {
  console.log(`施主，莫急，${port}号技师为您服务！！！`)

  chalk.red.bold(`
      \n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`
  )
})







