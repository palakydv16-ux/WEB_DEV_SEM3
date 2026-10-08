const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const data = fs.readFileSync("data/users.json", "utf-8");
    const users = JSON.parse(data);

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        res.json({
            success: true,
            message: "Login successful!"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid email or password"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});