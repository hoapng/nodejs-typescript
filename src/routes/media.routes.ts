import { Router } from 'express'
import { uploadSingleImageController } from '~/controllers/medias.controllers'
const mediaRouter = Router()

mediaRouter.post('/login', uploadSingleImageController)

export default mediaRouter
