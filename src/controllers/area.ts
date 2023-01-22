import { deleteAreaService, getAreaByNameService, getAreaService, postAreaService } from "../services/area"
import { Area } from '../interfaces'

const getAreaController = async () => {
    return await getAreaService()
}

const getAreaByNameController = async ( nombre: string ) => {
    return await getAreaByNameService( nombre )
}

const postAreaController = async ( nuevaArea: Area ) => {
    const data = await getAreaByNameController( nuevaArea.nombre )
    if ( data.length ) throw new Error( "El nombre de area ya existe" )
    return await postAreaService( nuevaArea )
}

const patchAreaController = async () => {

}

const deleteAreaController = async ( id: string ) => {
    if ( !isNaN( +id ) ) {
        throw new Error( 'Parametros deben ser numeros ObjectId' )
    }
    return await deleteAreaService( id )
}

export {
    getAreaController,
    postAreaController,
    patchAreaController,
    deleteAreaController
}