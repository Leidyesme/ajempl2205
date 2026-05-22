const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.json({
        "message":"Hola ¡Bienvenidos al sistema!",
    })
})

app.get('/aprendices', (req, res) => {
    res.json([
        {
            "nombre":"Leidy Duarte",
            "id":1
        },
        {
            "nombre":"Sol Serrano",
            "id":2
        },
        {
            "nombre":"Jonathan Leherici",
            "id":3
        },
        {
            "nombre":"Juan Manuel Rodriguez",
            "id":4
        }
    ])
})

app.get('/programas', (req, res) => {
    res.json(
        [
            {
                "nombre":"Programación",
                "id":1
            },
            {
                "nombre":"Analisis",
                "id":2
            },
            {
                "nombre":"Desarrollo",
                "id":3
            },
            {
                "nombre":"Web",
                "id":4
            }
    ])
})

app.listen(port, () => {
    console.log(`tengo un servidor que si funciona y nos escucha por un puerto que es ==>${port}<==`)
})