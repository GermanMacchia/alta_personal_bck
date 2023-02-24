import { cert } from 'firebase-admin/app'
import { FB_CLIENT_MAIL, FB_PRIVATE_KEY } from './config/env.config'
import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: cert({
    clientEmail: FB_CLIENT_MAIL,
    privateKey: FB_PRIVATE_KEY ? JSON.parse(FB_PRIVATE_KEY) : undefined,
    projectId: 'alta-empleados',
  }),
})

export const firebaseAuth = admin.auth()
