import { Prop, getModelForClass } from '@typegoose/typegoose'

export class Area {

    @Prop( {
        required: true,
        lowercase: true,
        maxlength: 20,
    } )
    nombre: string

}

const AreaModel = getModelForClass( Area )
export default AreaModel