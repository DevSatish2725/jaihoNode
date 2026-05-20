// const { sum } = require("./calculate/sum");
// const multiply3  = require("./calculate/multiply");

const { sum, multiply3 } = require("./calculate");
const asyncModule = require("./async");
// require steps
// 1. it check file type
// 2. load file content
// 3. wraps inside an IIFE
// 4. Evaluation(in this step module.exports added in the IIFE)
// 5. Caching (it chaches file so that if same file used in multiple modules that will
// n't run again and again)

var a = 10;
var b = 20;

sum(a, b);

multiply3(a, b);

const URI =
  "mongodb+srv://mauryasatish146:GlGtPNf8roUYgkyD@cluster0.4xq3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
