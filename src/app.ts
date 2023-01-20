import express from 'express'
import cors from 'cors'
import empleados from './routes/empleado'
import area from './routes/area'
import connectDb from './db.connection'

const app = express()
connectDb()

app.use( express.json() )
app.use( cors() )
app.use( '/info', express.static( 'public' ) )
app.use( '/api/empleados', empleados )
app.use( '/api/area', area )

app.get( '/test', ( _req, res ) => {
    res.send( 'API online' )
} )

export default app 