import * as dotenv from 'dotenv'
dotenv.config()

export const {
  DB_CONN_STRING,
  DB_NAME,
  EMPLEADOS_COLECTION,
  AREA_COLECTION,
  JWTSECRET,
  CLOUDINARY_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  FB_PRIVATE_KEY,
  FB_CLIENT_MAIL,
} = process.env as {
  [key: string]: string
}
