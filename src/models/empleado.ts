import { Prop, Ref, getModelForClass } from '@typegoose/typegoose'
import { ObjectId } from 'mongodb'
import { Area } from './area'


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
        ref: () => Area,
        type: () => ObjectId
    } )
    area?: Ref<Area>
}

const EmpleadoModel = getModelForClass( Empleado )
export default EmpleadoModel
