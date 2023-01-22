import { getEmpleadoService, getEmpleadosByAreaService } from "../services/empleado"


const getEmpleadosByAreaController = async ( id: string ) => {
    return getEmpleadosByAreaService( id )
}

const getEmpleadoController = async () => {
    return await getEmpleadoService()
}

const postEmpleadoController = async () => {

}

const patchEmpleadoController = async () => {

}

const deleteEmpleadoController = async () => {

}

export {
    getEmpleadoController,
    postEmpleadoController,
    patchEmpleadoController,
    deleteEmpleadoController,
    getEmpleadosByAreaController
}