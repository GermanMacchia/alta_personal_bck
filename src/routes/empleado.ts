import express from 'express'
import { getEmpleadoController, postEmpleadoController } from '../controllers/empleado'

const router = express.Router()

router.get( '/', async ( _req, res ) => {
    try {
        const areas = await getEmpleadoController()
        res.status( 200 ).send( areas )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
} )

router.post( '/', async ( _req, res ) => {
    try {
        const empleado = await postEmpleadoController()
        res.status( 200 ).send( empleado )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
} )

router.patch( '/', async ( _req, _res ) => {

} )

router.delete( '/', async ( _req, _res ) => {

} )

export default router
