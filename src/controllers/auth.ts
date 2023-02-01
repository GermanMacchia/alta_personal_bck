import { JWTSECRET } from "../config/env.config"
import { User } from "../interfaces/user.interface"
import { getUserByEmailService, postNewUserService } from "../services/auth"
import { hasLengthError } from '../utils/hasLength.error'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const usuarioExistenteError = 'El email ya se encuentra registrado'
const usuarioNoRegistradoError = 'El nombre de usuario no esta registrado'
const datosIncompletos = 'No enviaste todos los datos requeridos'
const getUserByEmailController = async (email: string) => {
    return await getUserByEmailService(email)
}

const postNewUserController = async ( newUser: User) => {
    if(!newUser.email || !newUser.password) throw new Error(datosIncompletos)
    const response = await getUserByEmailController(newUser.email)
    hasLengthError(response, usuarioExistenteError)
    newUser.password = await bcrypt.hash(newUser.password, 10);
    return await postNewUserService(newUser)
}

const postSignInController = async (user: User) => {
        if(!user.email || !user.password) throw new Error(datosIncompletos)
        let response;
        
        response = await getUserByEmailController(user.email);
        if (!response.length) { 
            throw new Error(usuarioNoRegistradoError)
        }
       
        let passverify = bcrypt.compareSync(user.password, response[0].password)
        if (passverify == false) {
            throw new Error('Contraseña incorrecta')
        }
        const tokenData = {
            email: response[0].email,
            _id: response[0]._id
        };
        const token = jwt.sign(tokenData, JWTSECRET, { 
            expiresIn: 60 * 60 * 24 
        });

        return token;
}

export{
    postNewUserController,
    getUserByEmailController,
    postSignInController
}