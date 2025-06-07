const mongoose = require('mongoose');
const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json({ success: true, message: data });
  } catch (err) {
    console.log('Products cannot be fetched');
    console.log(err.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const addProduct = async (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res.status(400).json({ success: false, message: 'Please provide all fields.' });
  }
  const product = new Product({
    name: name,
    price: price,
    image: image,
  });
  try {
    await Product.insertOne(product);
    res.redirect('/');
  } catch (err) {
    console.log('Product cannot be added');
    console.log(err.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  const product = { name, price, image };
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  try {
    await Product.findByIdAndUpdate(id, product);
    res.redirect('/');
  } catch (err) {
    console.log('Product cannot be updated');
    console.log(err.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.redirect('/');
  } catch (err) {
    console.log('Product cannot be deleted');
    console.log(err.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
