import Category from "../model/CategoryModel.js";


export const CreateCatogory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Name is required", success: false })
        }
        const category = await Category.findOne({ name })
        if (category) {
            return res.status(400).json({ message: "Category already exist", success: false })
        }
        const newCategory = await Category.create({ name })
        if (!newCategory) {
            return res.status(400).json({ message: "Category creation failed", success: false })
        }
        return res.status(400).json({ message: "Category created successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find()
        if (!category) {
            return res.status(404).json({ message: "Category not found", success: false })
        }
        return res.status(200).json({ message: "Category fetched successfully", success: true, category })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required", success: false })
        }
        const category = await Category.findByIdAndDelete(id)
        if (!category) {
            return res.status(404).json({ message: "Category not found", success: false })
        }
        return res.status(200).json({ message: "Category deleted successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID is required", success: false })
        }
        if (!name) {
            return res.status(400).json({ message: "Name is required", success: false })
        }
        const category = await Category.findById(id)
        if (!category) {
            return res.status(404).json({ message: "Category not found", success: false })
        }
        category.name= name
        await category.save()
        return res.status(200).json({ message: "Category updated successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false })
    }
} 