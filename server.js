import express from 'express'
import next from 'next'

const dev = process.env.NODE__ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.get('/p/:id',(req, res) => {
      const actualPage = 'product'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })
  }).catch(err => {
    console.log(err.stack);
    process.exit(1) 
  })