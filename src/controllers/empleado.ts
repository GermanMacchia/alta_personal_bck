import { deleteEmpleadoService, getEmpleadoByDniService, getEmpleadoService, getEmpleadosByAreaService, patchEmpleadoService, postEmpleadoService } from "../services/empleado"
import { Empleado } from '../interfaces/empleado.interface'
import { hasLengthError } from '../utils/hasLength.error'

const empleadoExistenteError = 'El dni de la persona ya existe'

const getEmpleadosByAreaController = async ( id: string ) => {
    return getEmpleadosByAreaService( id )
}

const getEmpleadoController = async () => {
    return await getEmpleadoService()
}

const getEmpleadoByDniController = async ( dni: number ) => {
    return await getEmpleadoByDniService( dni )
}

const postEmpleadoController = async ( empleado: Empleado ) => {
    const data = await getEmpleadoByDniController( empleado.dni )
    hasLengthError( data, empleadoExistenteError )
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
    getEmpleadosByAreaController,
    getEmpleadoByDniController
}