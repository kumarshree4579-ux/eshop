import express from 'express'
import { CreateCatogory, deleteCategory, getAllCategory, updateCategory } from '../controller/cateogoryController.js'

const route= express.Router()

route.post('/create', CreateCatogory)
route.get('/all', getAllCategory)
route.delete('/delete/:id', deleteCategory)
route.put('/update/:id', updateCategory)

export default route