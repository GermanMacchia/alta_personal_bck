import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "./env.config"
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: CLOUDINARY_NAME, 
  api_key: CLOUDINARY_KEY, 
  api_secret: CLOUDINARY_SECRET 
});

const uploadImage = async (filePath: string) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'avatares'
  })
}

const deleteImage = async(id: string) => {
  return await cloudinary.uploader.destroy(id)
}

export{
  uploadImage,
  deleteImage
} 