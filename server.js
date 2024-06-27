var express = require('express')
var app = express()
var fs= require('fs')

let port = 3000

app.use('/home', (req, res) => {
    fs.readFile('./pages/home.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

app.use('/about', (req, res) => {
    fs.readFile('./pages/about.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

app.use('/contact', (req, res) => {
    fs.readFile('./pages/contact.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

app.use('/oops', (req, res) => {
    res.writeHead(401)
    res.write('401, go back')
    return res.end()
})

app.use('/', (req, res) => {
    res.write('Try /home, /about, /contact, and /oops!')
    return res.end()
})

app.listen(port, function () {
    console.log('listening on port ' + port)
})