
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { JWTSECRET } from './config/env.config'
import { handleHttp } from './utils'

const allowed = [ '/seed', '/test', '/auth/signin','/auth/signup']

const authMiddleware  = ( req: Request, res: Response, next: NextFunction ) => {
    const token = req.headers.authorization
    const bypass = allowed.includes(req.url)

    if(bypass){
       next() 
    } 
    
    else if ( token && !bypass ) {
        jwt.verify( token, JWTSECRET, ( error: any, _decoded: any ): any => {
            if ( error ) {
                return handleHttp( res, 'Token invalido', 400 )
            } else {
                next()
            }
        } )
    } else {
        return handleHttp( res, 'Token vacío', 400 )
    }
}


export default authMiddleware