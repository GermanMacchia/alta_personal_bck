import express from 'express'
import { deleteAreaController, getAreaController, postAreaController } from '../controllers/area'

const router = express.Router()

router.get( '/', async ( _req, res ) => {
    try {
        const areas = await getAreaController()
        res.status( 200 ).send( areas )
    } catch ( error: any ) {
        res.status( 400 ).json( error.message )
    }
} )

router.post( '/', async ( req, res ) => {
    try {
        const area = await postAreaController( req.body )
        res.status( 200 ).send( area )
    } catch ( error: any ) {
        res.status( 400 ).json( error.message )
    }
} )

router.patch( '/', async ( _req, _res ) => {

} )

router.delete( '/:id', async ( req, res ) => {
    try {
        const area = await deleteAreaController( req.params.id )
        res.status( 200 ).send( area )
    } catch ( error: any ) {
        res.status( 400 ).send( error.message )
    }
} )

export default router