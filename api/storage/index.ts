import multer from "multer"
import { make } from "simple-body-validator"
import { STORAGE_DIR } from "@/env"

export const uploadAvatar = multer({ 
  dest: `${STORAGE_DIR}/avatars`,
  fileFilter(request, file, callback) {
    const body = request.body

    const validator = make(body, {
      name: 'required|string',
      email: 'required|email',
      password: 'required|string|min:8',
      photo: 'nullable|string'
    })
  
    if (!validator.validate()) {
      const message = JSON.stringify(validator.errors().all())
      callback(new Error(message))
      return
    }

    callback(null, true)
  }
}).single('avatar')

