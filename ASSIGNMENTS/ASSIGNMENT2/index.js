const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

// Read products from JSON file
const getProducts = () => {
    const data = fs.readFileSync("product.json", "utf8");
    return JSON.parse(data);
};

// GET all products
app.get("/products", (req, res) => {
    const products = getProducts();
    res.json(products);
});

// GET product by ID
app.get("/products/:id", (req, res) => {
    const products = getProducts();

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// POST new product
app.post("/products", (req, res) => {
    const products = getProducts();

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };

    products.push(newProduct);

    fs.writeFileSync(
        "product.json",
        JSON.stringify(products, null, 2)
    );

    res.status(201).json(newProduct);
});

// DELETE product
app.delete("/products/:id", (req, res) => {
    const products = getProducts();

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    fs.writeFileSync(
        "product.json",
        JSON.stringify(products, null, 2)
    );

    res.json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});