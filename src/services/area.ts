import { AreaModel } from "../models"
import { ObjectId } from 'mongodb'
import { Area } from '../interfaces/area.interface'

const getAreaService = async () => {
    return await AreaModel.find( {} )
}

const getAreaByNameService = async ( nombre: string ) => {
    return await AreaModel.find( { nombre: nombre } )
}

const postAreaService = async ( nuevaArea: Area ) => {
    return await AreaModel.create( nuevaArea )
}

const patchAreaService = async () => {

}

const deleteAreaService = async ( id: string ) => {
    return await AreaModel.deleteOne( { _id: new ObjectId( id ) } )
}



export {
    getAreaService,
    postAreaService,
    patchAreaService,
    deleteAreaService,
    getAreaByNameService
}