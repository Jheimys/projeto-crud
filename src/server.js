// Criando um servidor

const express = require('express') // express é uma função tenho que chamar
const path = require('path')

const app = express()

//Definindo  o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos 
app.use(express.static(path.join(__dirname, 'public')))

//Hebilitar o server para receber dados via post (fórmularios)
app.use(express.urlencoded({extended:true}))

//rotas
app.get('/', (req, res)=> {
    res.render('index', {
        title: 'Titulo teste'
    })
})

//404 error (not fond)
app.use((req, res) =>{
    res.send('Página não encontrada!')
})

//executando o sevidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Sever is listening on port ${port}`))