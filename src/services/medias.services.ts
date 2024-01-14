import { Request } from 'express'
import { UPLOAD_DIR } from '~/constants/dir'
import { getNameFromFullname, handleUploadSingleImage } from '~/utils/file'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'
import { isProduction } from '~/constants/config'

config()

class MediasService {
  async handleUploadSingleImage(req: Request) {
    const file = await handleUploadSingleImage(req)
    const newName = getNameFromFullname(file.newFilename)
    const newPath = path.resolve(UPLOAD_DIR, `${newName}.jpg`)
    await sharp(file.filepath).jpeg().toFile(newPath)
    fs.unlinkSync(file.filepath)
    return isProduction ? `${process.env.HOST}/medias/${newName}.jpg` : `http://localhost:3000/uploads/${newName}.jpg`
  }
}

const mediasService = new MediasService()

export default mediasService
