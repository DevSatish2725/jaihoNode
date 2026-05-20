const https = require("https");
const fs = require("fs");


https.get("https://dummyjson.com/products", (res) => {
    console.log("Api data")
})
setTimeout(() => {
  console.log("Timers...");
}, 3000);

// Async way to read file
fs.readFile("./files.txt", "utf8", (err, data) => {
    console.log("file data", data);
})

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 6));
