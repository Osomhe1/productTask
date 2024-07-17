// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/register",
    createProxyMiddleware({
      target: "https://shark-app-ia4iu.ondigitalocean.app",
      changeOrigin: true,
    })
  );
};
