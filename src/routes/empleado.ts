import express from 'express'
import { EmpleadoModel } from '../models'

const router = express.Router()

router.get( '/', async ( _req, res ) => {
    res.send( await EmpleadoModel.find( {} ) )
} )

router.post( '/', async ( _req, _res ) => {

} )

router.patch( '/', async ( _req, _res ) => {

} )

router.delete( '/', async ( _req, _res ) => {

} )

export default router