import empleados from './empleados.json'
import areas from './areas.json'
import { AreaModel, EmpleadoModel } from '../models'

const populateAreas = async () => {
    for await ( const area of areas ) {
        AreaModel.create( {
            nombre: area.nombre
        } )
    }
}

const populateEmpleados = async () => {
    for await ( const empleado of empleados ) {
        const areaID = await AreaModel.findOne( { nombre: empleado.area } )
        const [ year, month, day ] = empleado.fechaNac

        await EmpleadoModel.create( {
            apellido: empleado.apellido,
            descripcion: empleado.descripcion,
            dni: empleado.dni,
            esDesarrollador: empleado.esDesarrollador,
            fechaNac: new Date( year, month, day ),
            nombre: empleado.nombre,
            area: areaID
        } )
    }
}


const seedDB = async () => {
    await populateAreas()
    //timeOut para darle tiempo a BD generar registro
    await new Promise( ( res ) => setTimeout( () => res( true ), 1000 ) )
    await populateEmpleados()
}

export default seedDB