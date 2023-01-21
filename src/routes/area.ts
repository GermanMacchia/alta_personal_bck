import express from 'express'
import { getAreaController, postAreaController } from '../controllers/area'

const router = express.Router()

router.get( '/', async ( _req, res ) => {
    try {
        const areas = await getAreaController()
        res.status( 200 ).send( areas )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
} )

router.post( '/', async ( req, res ) => {
    console.log( req.body )
    try {
        const area = await postAreaController( req.body )
        res.status( 200 ).send( area )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
} )

router.patch( '/', async ( _req, _res ) => {

} )

router.delete( '/', async ( _req, _res ) => {

} )

export default router