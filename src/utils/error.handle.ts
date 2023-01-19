import { Response } from "express"

const handleHttp = ( res: Response, message: string, status?: number ): void => {
    if ( status ) res.status( status )
    res.send( message )
}

export { handleHttp }