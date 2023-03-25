const path = require("path");
console.log("Testing......", __dirname, path.resolve(__dirname, "dist1"));
module.exports = [
  {
    entry: {
      mainDev: "./src/index.js",
      //   helloProd: "./src/index2.js",
    },
    mode: "development",
    name: "dev",
  },
  {
    entry: "./src/index2.js",
    mode: "production",
    output: {
      filename: "mainProd.js",
    },
    name: "prod",
  },
];
