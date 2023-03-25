module.exports = [
  {
    entry: {
      hello: "./src/index.js",
      helloProd: "./src/index2.js",
    },
    mode: "development",
  },
  {
    entry: "./src/index2.js",
    mode: "production",
    output: {
      filename: "mainProd.js",
    },
  },
];
