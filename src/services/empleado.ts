import { EmpleadoModel } from "../models"
import { ObjectId } from 'mongodb'

const getEmpleadoService = async () => {
    return await EmpleadoModel.find( {} )
}

const getEmpleadosByAreaService = async ( id: string ) => {
    const data = await EmpleadoModel.find( { area: { $eq: new ObjectId( id ) } } )
    return data
}

const postEmpleadoService = async () => {

}

const patchEmpleadoService = async () => {

}

const deleteEmpleadoService = async () => {

}

export {
    getEmpleadoService,
    postEmpleadoService,
    patchEmpleadoService,
    deleteEmpleadoService,
    getEmpleadosByAreaService
}