const packageName = require("./package.json").name;

module.exports = {
  eslintConfig: {
    rules: {
      "no-debugger": 0,
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
    },
  },
};
