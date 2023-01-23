
import app from '../src/app'
import request from 'supertest'
import mongoose from "mongoose"

describe( 'GET /test', () => {

    const fetchResponse = async () => await request( app ).get( '/test' ).send()
    const expectedResponse = 'API online'

    test( 'should receive a 200 status code', async () => {
        expect( ( await fetchResponse() ).statusCode ).toBe( 200 )
    } )

    test( 'should receive a specific text', async () => {
        expect( ( await fetchResponse() ).text ).toBe( expectedResponse )
    } )

} )

mongoose.connection.close()