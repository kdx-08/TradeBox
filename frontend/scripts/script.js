const url = '/api/products';

const displayProducts = (products) => {
  const container = document.querySelector('#product-list');
  if (!products.length) {
    container.innerHTML = `
    <div style="text-align:center">
      <h3>No products found</h3>
      <p>Add an item to view it here</p>
    </div>
    `;
  }
  for (let product of products) {
    const newProduct = document.createElement('DIV');
    newProduct.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price}</p>
          <form action="/api/products/${product._id}?_method=DELETE" method="POST">
          <a href="/edit/${product._id}" class="btn btn-primary">Edit</a>
          <button type="submit" class="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    `;
    newProduct.classList.add('item');
    container.appendChild(newProduct);
  }
};

const getProducts = async () => {
  try {
    const response = await (await fetch(url)).json();
    displayProducts(response.message);
  } catch (err) {
    console.log(err);
  }
};

getProducts();

// JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
