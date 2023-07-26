const uuid = require('uuid')
const path = require('path')


class FileService{
     saveFile (file){
        try{
            let fileName = null
            Object.keys(file).forEach(key=>{
                const filePath = path.join(__dirname,'static/photo', file[key].name.split(" ").join(""))
                fileName = file[key].name.split(" ").join("")
                file[key].mv(filePath,(err)=>{
                    if(err){
                        throw new Error(err)
                    }
                })
            })
            return fileName
        }
        catch (e) {
            console.log(e)
        }
    }
}
module.exports = new FileService()