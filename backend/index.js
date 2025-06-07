const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const customRoutes = require('./routes/customRoutes');
const methodOverride = require('method-override');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const public = path.join(__dirname, '..', 'frontend');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/api/products', productRoutes);
app.use('/', customRoutes);
app.set('views', path.join(public));
app.set('view engine', 'ejs');
app.use('/frontend', express.static(public));

app.get(/(.*)/, (req, res) => {
  res.send('Page not found!');
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at port ${port}`);
});
