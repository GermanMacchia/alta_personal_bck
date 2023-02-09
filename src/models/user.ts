import { Prop, getModelForClass } from '@typegoose/typegoose'

class User {
  @Prop({
    required: true,
    lowercase: true,
  })
  email: string

  @Prop({
    required: true,
  })
  password: string
}

const UserModel = getModelForClass(User)
export default UserModel
