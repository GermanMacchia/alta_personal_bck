import { getAreaService, postAreaService } from "../services/area"

const getAreaController = async () => {
    return await getAreaService()
}

const postAreaController = async ( nuevaArea: JSON ) => {
    console.log( nuevaArea )
    return await postAreaService( nuevaArea )
}

const patchAreaController = async () => {

}

const deleteAreaController = async () => {

}

export {
    getAreaController,
    postAreaController,
    patchAreaController,
    deleteAreaController
}