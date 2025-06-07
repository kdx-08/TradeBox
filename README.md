# 📦 TradeBox

A simple backend application built with Express.js and MongoDB, designed for managing items. Data is stored securely in the cloud using MongoDB Atlas. This project features CRUD operations (Create, Read, Update, Delete) for items, accessed via a custom API.

## 🚀 Features

- **Add Items:** Create new item and add to database.
- **Edit Items:** Modify existing item information.
- **Delete Items:** Delete an item from database.
- **Cloud Storage:** Data persistence using MongoDB Atlas.
- **Custom API:** A RESTful API built with Express.js for interacting with item data.

## 💻 Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB Atlas:** Cloud-based MongoDB hosting

## ✨ Example Search Results

![Home Page](/img/home.png)

![Add new item](/img/add.png)

![Edit item](/img/edit.png)

## 🛠️ Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kdx-08/TradeBox
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd TradeBox
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Set up environment variables:**

    - Create a `.env` file in the root directory.
    - Add the following variables, replacing the placeholders with your actual values:

    ```
    MONGODB_URI=<your_mongodb_atlas_connection_string>
    PORT=3000  # Or your desired port
    ```

5.  **Run the application:**

    ```bash
    npm run dev
    ```

    This will start the Express server.

## 🔌 API Endpoints

The following API endpoints are available:

- **`POST /api/products`**: Create a new item.
- **`GET /api/products`**: Retrieve all items.
- **`PATCH /api/products/:id`**: Update an existing item by ID.
- **`DELETE /api/products/:id`**: Delete an item by ID.
