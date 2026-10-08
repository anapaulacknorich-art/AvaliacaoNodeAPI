import express from 'express'
import router from './src/router/filme.js'

const app = express();
app.use(express.json())

app.use("/api", router)

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000")
})