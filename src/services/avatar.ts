import { Avatar } from '../interfaces/avatar.interface'
import AvatarModel from '../models/avatar'

const postNewAvatarService = async (avatar: Avatar) => {
  return await AvatarModel.create(avatar)
}

const getAvatarsService = async () => {
  return await AvatarModel.find({})
}

const getAvatarByIdService = async (_id: string) => {
  return await AvatarModel.find({ empleado_id: { $eq: _id } })
}

const deleteAvatarService = async (_id: string) => {
  return await AvatarModel.findOneAndRemove({ empleado_id: { $eq: _id } })
}

export {
  postNewAvatarService,
  getAvatarsService,
  getAvatarByIdService,
  deleteAvatarService,
}
