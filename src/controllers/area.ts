import { deleteAreaService, getAreaByNameService, getAreaService, patchAreaService, postAreaService } from "../services/area"
import { Area } from '../interfaces'
import { hasLengthError } from '../utils'
import { getEmpleadosByAreaController } from "./empleado"

const areaConEmpleadosError = 'El area tiene empleados asignados'
const areaExistenteError = 'El nombre de area ya existe'

const getAreaController = async () => {
    return await getAreaService()
}

const getAreaByNameController = async ( nombre: string ) => {
    return await getAreaByNameService( nombre )
}

const postAreaController = async ( nuevaArea: Area ) => {
    const data = await getAreaByNameController( nuevaArea.nombre )
    hasLengthError( data, areaExistenteError )
    return await postAreaService( nuevaArea )
}

const patchAreaController = async ( id: string, data: Area ) => {
    return await patchAreaService( id, data )
}

const deleteAreaController = async ( id: string ) => {
    const data = await getEmpleadosByAreaController( id )
    hasLengthError( data, areaConEmpleadosError )
    return await deleteAreaService( id )
}

export {
    getAreaController,
    postAreaController,
    patchAreaController,
    deleteAreaController
}