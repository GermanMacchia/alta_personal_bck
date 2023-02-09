import express, { Request, Response } from 'express'
import { handleHttp } from '../utils'
import {
  deleteAvatarController,
  getAvatarByIdController,
  getAvatarsController,
  postNewAvatarController,
} from '../controllers/avatar'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    await postNewAvatarController(req)
    handleHttp(res, 'Imagen Recibida', 201)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

router.get('/', async (_req, res) => {
  try {
    const data = await getAvatarsController()
    handleHttp(res, data, 200)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

router.get('/:_id', async (req, res) => {
  try {
    const data = await getAvatarByIdController(req.params._id)
    handleHttp(res, data, 200)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

router.delete('/:_id', async (req, res) => {
  try {
    await deleteAvatarController(req.params._id)
    handleHttp(res, 'avatar eliminado', 202)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

export default router
