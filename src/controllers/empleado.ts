import { getEmpleadoService } from "../services/empleado"

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
    deleteEmpleadoController
}