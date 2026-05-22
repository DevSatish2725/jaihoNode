const express = require("express");
const { adminAuth, userAuth } = require("./middlewares");
const app = express();

app.use("/admin", adminAuth);
app.get("/admin/users", (req, res) => {
  res.send("All data sent.");
});

app.delete("/admin/deleteuser", (req, res) => {
  res.send("User is deleted");
});

app.get("/users/login", (req, res) => {
  res.send("User logged in");
});
app.get("/users/:userid", (req, res) => {
  const userId = req.params.userid;

  res.send(`User id ${userId}`);
});
app.get("/users", userAuth, (req, res) => {
  res.send("Users data sent.");
});

app.listen(9712, () => {
  console.log("Server is listening on 9712 port");
});
