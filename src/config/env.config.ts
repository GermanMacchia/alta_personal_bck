import * as dotenv from "dotenv"
dotenv.config()

export const {
    DB_CONN_STRING,
    DB_NAME,
    EMPLEADOS_COLECTION,
    AREA_COLECTION
} = process.env as {
    [ key: string ]: string
}