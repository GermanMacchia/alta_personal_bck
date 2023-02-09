import { ObjectId } from 'mongodb'
import { Empleado } from '../interfaces/empleado.interface'
import { EmpleadoModel } from '../models'

const getEmpleadoService = async () => {
  return await EmpleadoModel.find({})
}

const getEmpleadosByAreaService = async (id: string) => {
  return await EmpleadoModel.find({ area: { $eq: new ObjectId(id) } })
}

const getEmpleadoByDniService = async (dni: number) => {
  return await EmpleadoModel.find({ dni: { $eq: dni } })
}

const postEmpleadoService = async (empleado: Empleado) => {
  return await EmpleadoModel.create(empleado)
}

const patchEmpleadoService = async (id: string, data: Empleado) => {
  return await EmpleadoModel.findByIdAndUpdate(id, { ...data })
}

const deleteEmpleadoService = async (id: string) => {
  return await EmpleadoModel.deleteOne({ _id: new ObjectId(id) })
}

export {
  getEmpleadoService,
  postEmpleadoService,
  patchEmpleadoService,
  deleteEmpleadoService,
  getEmpleadosByAreaService,
  getEmpleadoByDniService,
}
