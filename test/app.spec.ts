import app from '../src/app'
import supertest from 'supertest'
import mongoose from 'mongoose'
import { server } from '../src/index'

const api = supertest(app)

describe('GET /Empleado', () => {
  const fetchResponse = async () => await api.get('/api/empleado/')
  test('should receive a 200 status code', async () => {
    expect((await fetchResponse()).statusCode).toBe(200)
  })

  test('should receive a application/json as type', async () => {
    expect((await fetchResponse()).type).toBe('application/json')
  })
})

describe('GET /Area', () => {
  const fetchResponse = async () => await api.get('/api/area/')
  test('should receive a 200 status code', async () => {
    expect((await fetchResponse()).statusCode).toBe(200)
  })

  test('should receive a application/json as type', async () => {
    expect((await fetchResponse()).type).toBe('application/json')
  })
})

afterAll(() => {
  server.close()
  mongoose.connection.close()
})
