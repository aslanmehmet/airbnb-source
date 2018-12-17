const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { parse } = require('url')

app.prepare()
  .then(() => {
    const server = express()


    server.get('/:title', (req, res) => {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      if (pathname === '/list') {
        console.log("List")
        const actualPage = '/list'
        const queryParams = { title: req.params.title }
        app.render(req, res, actualPage, queryParams)
      } else if(pathname === '/'){
        console.log("Home");
        const actualPage = '/list'
        const queryParams = { title: req.params.title }
        app.render(req, res, actualPage, queryParams)
      }else {
        console.log("heyyy")
        const actualPage = '/list-detail'
        const queryParams = { title: req.params.title }
        app.render(req, res, actualPage, queryParams)
      }

    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })