import { Prop, getModelForClass } from '@typegoose/typegoose'

class Area {

    @Prop( {
        required: true,
        lowercase: true,
        maxlength: 20,
    } )
    nombre: string

}

const areaModel = getModelForClass( Area )
export default areaModel