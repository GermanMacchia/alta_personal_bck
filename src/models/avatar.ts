import { Prop, Ref, getModelForClass } from '@typegoose/typegoose'
import { ObjectId } from 'mongodb'
import { Empleado } from './empleado'

export class Avatar {
  @Prop({
    ref: () => Empleado,
    type: () => ObjectId,
  })
  empleado_id?: Ref<Empleado>

  @Prop({
    required: true,
    maxlength: 200,
    type: String,
  })
  url: string

  @Prop({
    required: true,
    maxlength: 200,
    type: String,
  })
  public_id: string

  @Prop({
    required: true,
    maxlength: 200,
    type: String,
  })
  nombre: string
}

const AvatarModel = getModelForClass(Avatar)
export default AvatarModel
