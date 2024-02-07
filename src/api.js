import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import cors from 'cors'
const app = express()
import secure from './routes/secure.routes.js'

// Middlewares
app.use(cors())
app.use(express.json())
app.use(fileUpload())
app.use(morgan('combined'))

// Routes
app.use('/secure', secure)

app.use((req, res, next) => {
   res.status(404).json({ message: 'ruta no encontrada' })
})

app.set('port', process.env.PORT || 9876)
app.listen(app.get('port'), () => {
   console.log('servidor corriendo en el puerto', app.get('port'))
})
