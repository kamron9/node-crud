const express = require('express')
const mongoose = require('mongoose')
const postRouter = require('./routes/postRouter.js')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', postRouter)
app.use(express.static('static'))

app.get('/', (req, res) => {
	res.redirect('api/posts')
})

const startApp = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://crud:crud@crud-cluster.9bduvrt.mongodb.net/?retryWrites=true&w=majority&appName=crud-cluster',
			{ useNewUrlParser: true, useUnifiedTopology: true }
		)
		app.listen(5000, () => console.log('server running'))
	} catch (error) {
		console.log(error)
	}
}
startApp()
