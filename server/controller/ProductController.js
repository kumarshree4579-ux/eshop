import Product from '../model/ProductModel.js'

export const createProduct = async (req, res) => {
    try {
        const { name, price, mrp, stock, description, category } = req.body;
        if (!name || !price || !mrp || !stock || !description || !category) {
            return res.status(400).json({ message: "All fields are required", success: false })
        }
        const product = Product.create({ name, price, mrp, stock, description, category })
        if (!product) {
            return res.status(400).json({ message: "Product creation failed", success: false })
        }
        return res.status(201).json({ message: "Product created successfully", success: true })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find()
        if (!product) {
            return res.status(404).json({ message: "Product not found", success: false })
        }
        return res.status(200).json({ message: "Product fetched successfully", success: true, product })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error", success: false, error })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required", success: false })
        }
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found", success: false })
        }
        return res.status(200).json({ message: "Product  deleted successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, mrp, stock, description, category } = req.body;
        if (!id) {
            return res.status(400).json({ message: "ID is required", success: false })
        }
        const product = await Product.findById(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found", success: false })
        }
        product.name = name || product.name;
        product.price = price || product.price;
        product.mrp = mrp || product.mrp;
        product.stock = stock || product.stock;
        product.description = description || product.description;
        product.category = category || product.category;

        await product.save();
        return res.status(200).json({ message: "Product  updated successfully", success: true });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error", success: false, error: error.message })
    }
}