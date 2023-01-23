import express from 'express'
import { deleteEmpleadoController, getEmpleadoController, patchEmpleadoController, postEmpleadoController } from '../controllers/empleado'
import { handleHttp } from '../utils/http.handler'

const router = express.Router()

router.get( '/', async ( _req, res ) => {
    try {
        const empleados = await getEmpleadoController()
        handleHttp( res, empleados, 200 )
    } catch ( error ) {
        res.status( 400 ).send( error )
    }
} )

router.post( '/', async ( req, res ) => {
    try {
        const empleado = await postEmpleadoController( req.body )
        handleHttp( res, empleado, 201 )
    } catch ( error: any ) {
        handleHttp( res, error.message, 400 )
    }
} )

router.patch( '/:id', async ( req, res ) => {
    try {
        const data = await patchEmpleadoController( req.params.id, req.body )
        handleHttp( res, data, 202 )
    } catch ( error: any ) {
        handleHttp( res, error.message, 400 )
    }
} )

router.delete( '/:id', async ( req, res ) => {
    try {
        const data = await deleteEmpleadoController( req.params.id )
        handleHttp( res, data, 202 )
    } catch ( error: any ) {
        handleHttp( res, error.message, 400 )
    }
} )

export default router
