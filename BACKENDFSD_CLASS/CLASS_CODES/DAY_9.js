import express from "express";
import http from "http";

const app = express();
app.use(express.json());

// Sample users
let users = [
  { id: 1, name: "Nidhi", email: "nidhi@example.com" },
  { id: 2, name: "John", email: "john@example.com" }
];

// ✅ READ - Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// ✅ CREATE - Add new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.json(newUser);
});

// ✅ UPDATE - Modify existing user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
});

// ✅ DELETE - Remove user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);
  res.json({ message: "User deleted successfully", user: deletedUser[0] });
});

// ✅ Create server using Express
const server = http.createServer(app);

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
}); 


// import express from 'express';
// const app = express();
// app.use(express.json());
// let users=[
//     { id: 1, name: "Nirjara", email: "nirjara@example.com" },
//     { id: 2, name: "Pavni", email: "pavni@example.com" }
// ];

// //Get :get request to fetch all users
// app.get('/users',(req,res)=>{
//     res.json(users);
// });
// //Post :post request to create a new user
// app.post('/users',(req,res)=>{
// const user={
//     id:users.length+1,
//     name:req.body.name,
//     email:req.body.email
// };
// users.push(user);
// res.json(user);
// });
// //PUT:request to update a user
// app.put('/users/:id',(req,res)=>{
//     let user=users.find(u=>u.id==req.params.id);
//     user.name=req.body.name;
//     user.email=req.body.email;
//     res.send("user updated successfully");
     
//     res.json(user);
//     //DELETE:request to delete a user
//     app.delete('/users/:id',(req,res)=>{
//         users=users.filter(u=>u.id!=req.params.id);
//         res.send("user deleted successfully");})
// });

// app.listen(8000,()=>{
//     console.log('Server is running on port http://localhost:8000');
// });




// //Create a PRODUCT REST API and test all method in THUNDER CLIENT
// //work it on approx 100 products and test all the methods in THUNDER CLIENT
// //Structure
// //1. create folder productrestapi
// //2. create index.js file
// //3.create a product.json
// //4.install npm init :package.json
// //5.install express: npm i express :package_lock.json