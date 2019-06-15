#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync;
const lodash = require('lodash')

const slug = process.argv[2]
const tplSource = fs.readFileSync(path.join(__dirname, 'post.template.html'), 'utf-8')
const tpl = lodash.template(tplSource)

console.log(slug)

const html = tpl({
  slug
})

execSync(`mkdir -p post/${slug}`)
const postPath = path.join('post', slug, 'index.html')
fs.writeFileSync(postPath, html)

const PORT = 3333

execSync(`open -a 'Google Chrome' http://localhost:${PORT}/post/${slug}`)
