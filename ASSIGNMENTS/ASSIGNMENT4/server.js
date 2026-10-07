const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, "requests.json");

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Read requests from JSON file
function readRequests() {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

// Write requests to JSON file
function writeRequests(requests) {
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));
}

// GET all requests
app.get("/api/requests", (req, res) => {
    const requests = readRequests();
    res.json(requests);
});

// GET request by ID
app.get("/api/requests/:id", (req, res) => {
    const requests = readRequests();

    const request = requests.find(
        (item) => item.id === parseInt(req.params.id)
    );

    if (!request) {
        return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
});

// POST new request
app.post("/api/requests", (req, res) => {
    const requests = readRequests();

    const newRequest = {
        id: requests.length > 0
            ? requests[requests.length - 1].id + 1
            : 1,
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    requests.push(newRequest);
    writeRequests(requests);

    res.status(201).json(newRequest);
});

// PUT update request
app.put("/api/requests/:id", (req, res) => {
    const requests = readRequests();

    const id = parseInt(req.params.id);

    const index = requests.findIndex(
        (item) => item.id === id
    );

    if (index === -1) {
        return res.status(404).json({ message: "Request not found" });
    }

    requests[index] = {
        id: id,
        studentName: req.body.studentName,
        email: req.body.email,
        category: req.body.category,
        description: req.body.description,
        priority: req.body.priority
    };

    writeRequests(requests);

    res.json(requests[index]);
});

// DELETE request
app.delete("/api/requests/:id", (req, res) => {
    const requests = readRequests();

    const id = parseInt(req.params.id);

    const filteredRequests = requests.filter(
        (item) => item.id !== id
    );

    if (filteredRequests.length === requests.length) {
        return res.status(404).json({ message: "Request not found" });
    }

    writeRequests(filteredRequests);

    res.json({ message: "Request deleted successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});