import { Response } from "express"

const handleHttp = ( res: Response, payload: any, status?: number ): void => {
    if ( status ) res.status( status )
    res.send( payload )
}

export default handleHttp