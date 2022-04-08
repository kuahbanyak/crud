import Product from "../model/ProductModel.js";

export const getProducts =  async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const  product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const saveProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const isertedProduct = await product.save();
        res.json(isertedProduct);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}
export const updateProduct = async (req, res) => {
    try{
        const updateProduct = await Product.updateOne({_id: req.params.id}, {$set:req.body});
        res.json(updateProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.deleteOne({_id: req.params.id});
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}