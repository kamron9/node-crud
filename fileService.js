const uuid = require('uuid')
const path = require('path')


class FileService{
     saveFile (file){
        try{
            const fileName = uuid.v4() + 'jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName
        }
        catch (e) {
            console.log(e)
        }
    }
}
module.exports = new FileService()