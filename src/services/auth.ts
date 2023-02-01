import { User } from "../interfaces/user.interface"
import { UserModel } from "../models"


const getUserByEmailService = async (email: string) =>{
    return await UserModel.find({ email: { $eq: email } } )
}

const postNewUserService = async(newUser: User) => {
    return await UserModel.create(newUser)
}

export{
    getUserByEmailService,
    postNewUserService
}