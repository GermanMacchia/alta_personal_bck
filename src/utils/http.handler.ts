import { Response } from "express"

export const handleHttp = ( res: Response, payload: any, status?: number ): void => {
    if ( status ) res.status( status )
    res.json( payload )
}
