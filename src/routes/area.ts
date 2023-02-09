import express from 'express'
import {
  deleteAreaController,
  getAreaController,
  patchAreaController,
  postAreaController,
} from '../controllers/area'
import { handleHttp } from '../utils'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const areas = await getAreaController()
    handleHttp(res, areas, 200)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

router.post('/', async (req, res) => {
  try {
    const area = await postAreaController(req.body)
    handleHttp(res, area, 201)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const data = await patchAreaController(req.params.id, req.body)
    handleHttp(res, data, 202)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const data = await deleteAreaController(req.params.id)
    handleHttp(res, data, 202)
  } catch (error: any) {
    handleHttp(res, error.message, 400)
  }
})

export default router
