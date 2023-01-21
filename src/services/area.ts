import { AreaModel } from "../models"


const getAreaService = async () => {
    return await AreaModel.find( {} )
}

const postAreaService = async ( nuevaArea: JSON ) => {
    return await AreaModel.create( nuevaArea )
}

const patchAreaService = async () => {

}

const deleteAreaService = async () => {

}

export {
    getAreaService,
    postAreaService,
    patchAreaService,
    deleteAreaService
}