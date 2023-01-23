import { deleteEmpleadoService, getEmpleadoService, getEmpleadosByAreaService, patchEmpleadoService, postEmpleadoService } from "../services/empleado"
import { Empleado } from '../interfaces/empleado.interface'


const getEmpleadosByAreaController = async ( id: string ) => {
    return getEmpleadosByAreaService( id )
}

const getEmpleadoController = async () => {
    return await getEmpleadoService()
}

const postEmpleadoController = async ( empleado: Empleado ) => {
    return await postEmpleadoService( empleado )
}

const patchEmpleadoController = async ( id: string, data: Empleado ) => {
    return await patchEmpleadoService( id, data )
}

const deleteEmpleadoController = async ( id: string ) => {
    return await deleteEmpleadoService( id )
}

export {
    getEmpleadoController,
    postEmpleadoController,
    patchEmpleadoController,
    deleteEmpleadoController,
    getEmpleadosByAreaController
}