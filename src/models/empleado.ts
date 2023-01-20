import { ObjectId } from "mongodb"
import { Prop, getModelForClass } from '@typegoose/typegoose'

class Empleado {

    @Prop( {
        required: true,
        maxlength: 200,
        type: String
    } )
    descripcion: string

    @Prop( {
        required: true,
        type: Number,
        minlength: 8
    } )
    dni: number

    @Prop( {
        required: true,
        type: Boolean
    } )
    esDesarrollador: boolean

    @Prop( {
        required: true,
        type: Date
    } )
    fechaNac: Date

    @Prop( {
        required: true,
        maxlength: 20,
        lowercase: true
    } )
    nombre: string

    @Prop( {
        required: true,
        maxlength: 20,
        lowercase: true
    } )
    apellido: string

    @Prop( {
        type: ObjectId,
    } )
    area?: ObjectId
}

const empleadoModel = getModelForClass( Empleado )
export default empleadoModel
