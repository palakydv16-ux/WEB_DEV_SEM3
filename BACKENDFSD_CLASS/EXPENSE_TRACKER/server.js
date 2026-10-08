app.post("/expenses", (req, res) => {

    const expense = {
        id: expenses.length + 1,
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category
    };

    expenses.push(expense);

    res.json({
        message: "Expense added successfully",
        expense: expense
    });
});

app.get("/expenses", (req, res) => {
    res.json(expenses);
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});