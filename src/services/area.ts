import { ObjectId } from 'mongodb'
import { Area } from '../interfaces/area.interface'
import { AreaModel } from '../models'


const getAreaService = async () => {
    return await AreaModel.find( {} )
}

const getAreaByNameService = async ( nombre: string ) => {
    return await AreaModel.find( { nombre: nombre } )
}

const postAreaService = async ( nuevaArea: Area ) => {
    return await AreaModel.create( nuevaArea )
}

const patchAreaService = async ( id: string, data: Area ) => {
    return await AreaModel.findByIdAndUpdate( id, { ...data } )
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