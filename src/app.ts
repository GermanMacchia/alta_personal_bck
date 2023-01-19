import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use( express.json() )
app.use( cors() )
app.use( '/info', express.static( 'public' ) )


app.get( '/test', ( _req, res ) => {
    res.send( 'API online' )
} )

export default app 