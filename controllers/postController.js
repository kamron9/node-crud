const Post = require("../models/Post");
const fileService = require('../fileService')
class PostController{
    async create(req,res) {
        try{
            const {author,title,content} = req.body
            const file = req.files
            console.log(file)
            const fileName = fileService.saveFile(file)
            const post = await Post.create({author,title,content,picture:`${process.env.HOST}photo/${fileName}`})
            res.json(post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try {
            const posts = await Post.find()
            return res.json(posts)
        }catch (e) {
            res.status(500).json(e)
        }

    }
    async getOne(req,res){
        try {
            const {id} = req.params
            const post = await Post.findById(id)
            return res.json(post)
        }
        catch (e) {
            res.status(500).json(e)
        }

    }
    async update(req,res){
        try{
            const newPost = req.body
            if(!newPost._id){
                res.status(400).json({message:'pleace enter id'})
            }
            const updatedPost = await Post.findByIdAndUpdate(newPost._id, newPost, {new:true})
            return res.json(updatedPost)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params
            const deletedPost = await Post.findByIdAndDelete(id)
           return  res.json(deletedPost)
        }
        catch (e) {
            res.json(500).json(e)
        }

    }
}
module.exports = new PostController()