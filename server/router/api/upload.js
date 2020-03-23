const fs = require('fs'),
      path = require('path');
const { 
  responseSuccess, 
  responseParamsError,
  responseError
} = require('../../utils/response');
const uploadfile = async ctx => {
  const {files} = ctx.request 
  if (!files) {
    return ctx.body = responseParamsError(null, 'The uploaded file does not exist')
  }
  const receiveFiles = Array.isArray(files.file) ? files.file : [files.file]

  const uploadPath = path.join(__dirname, '../../../public/uploads')
  if (!fs.existsSync(uploadPath)) {
    fs.mkdir(uploadPath, err => {
      if (err) {
        return ctx.body = responseError(null, 'create upload directory failed')
      }
    })
  }

  try {
    for(let file of receiveFiles) {
      const reader = fs.createReadStream(file.path)
      let filePath = uploadPath + `/${file.name}`
      const upStream = fs.createWriteStream(filePath)
      reader.pipe(upStream)
    }
    ctx.body = responseSuccess(null, 'upload success')
  } catch {
    ctx.body = responseError(null, 'upload failed')
  }
}

const uploadfiles = async ctx => {
  
}

module.exports = {
  uploadfile,
  uploadfiles
}