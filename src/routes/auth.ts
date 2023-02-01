import express, { Request, Response } from 'express'
import { handleHttp } from '../utils'
import { postNewUserController, postSignInController } from '../controllers/auth'

const router = express.Router()

router.post( '/signup', async ( req : Request, res: Response ) => {
    try {
        await postNewUserController( req.body )
        handleHttp( res, 'User Created', 201 )
    } catch ( error: any ) {
        handleHttp( res, error.message, 400 )
    }
} )

router.post( '/signin', async ( req: Request, res: Response ) => {
    try {
        const area = await postSignInController( req.body )
        handleHttp( res, area, 200 )
    } catch ( error: any ) {
        handleHttp( res, error.message, 400 )
    }
} )

export default router
