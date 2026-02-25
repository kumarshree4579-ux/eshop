import express from 'express'
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '../controller/ProductController.js'

const route = express.Router()

route.post('/create', createProduct)
route.get('/all', getAllProduct)
route.delete('/delete/:id', deleteProduct)
route.put('/update/:id', updateProduct)


export default route