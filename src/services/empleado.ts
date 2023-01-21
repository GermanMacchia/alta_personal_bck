import { EmpleadoModel } from "../models"


const getEmpleadoService = async () => {
    return await EmpleadoModel.find( {} )
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
    deleteEmpleadoService
}