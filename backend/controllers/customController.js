const mongoose = require('mongoose');
const Product = require('../models/Product');

const path = require('path');
const public = path.join(__dirname, '..', '..', 'frontend');

const getProducts = (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
};

const createProduct = (req, res) => {
  res.sendFile(path.join(public, 'create.html'));
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  const product = await Product.findById(id);
  res.render('edit', { product });
};

module.exports = { getProducts, createProduct, editProduct };
