import { Request } from "express"
import { deleteAvatarService, getAvatarByIdService, getAvatarsService, postNewAvatarService } from "../services/avatar"
import {uploadImage, deleteImage} from "../config/cloudinary"
import { File, Avatar, Image } from '../interfaces';

const errorDeImagen = "No se envió la imagen"
const postNewAvatarController = async ( req: Request ) => {
    let 
    file : File,
    newAvatar : Avatar,
    image: Image

    if ( req.files ) {
        file = ( req.files.image as File)
        const path = file.tempFilePath

        image = await uploadImage( path )

        newAvatar = {
            empleado_id: req.body._id,
            nombre: req.body.nombre,
            url: image.secure_url,
            public_id: image.public_id
        }
        return await postNewAvatarService(newAvatar)
    }
    return new Error(errorDeImagen)
}

const getAvatarsController = async () => {
    return await getAvatarsService()
}

const getAvatarByIdController = async ( _id: string ) => {
    return await getAvatarByIdService( _id )
}

const deleteAvatarController = async ( _id: string ) => {
    
    const data = await getAvatarByIdService( _id )
    if(data.length){
        const publicId = data[0].public_id
        await deleteImage(publicId)
        await deleteAvatarService(_id)
    }
}

export {
    postNewAvatarController,
    getAvatarsController,
    deleteAvatarController,
    getAvatarByIdController
}