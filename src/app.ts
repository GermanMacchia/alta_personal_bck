import express from 'express'
import cors from 'cors'
import empleados from './routes/empleado'
import area from './routes/area'
import auth from './routes/auth'
import connectDb from './db.connection'
import seedDB from './seed/mongoose.seed'
import authMiddleware from './authMiddleware'

const app = express()
app.use( express.json() )
app.use( cors() )
connectDb()

app.use('/', authMiddleware)
app.use( '/info', express.static( 'public' ) )
app.use( '/api/empleado', empleados )
app.use( '/auth', auth )
app.use( '/api/area', area )

app.get( '/test', ( _req, res ) => {
    res.send( 'API online' )
} )

app.get( '/seed', ( _req, res ) => {
    try {
        seedDB()
        res.json( "DB seeded" )
    } catch ( error ) {
        res.status( 500 )
        res.json( error )
    }
} )

export default app 