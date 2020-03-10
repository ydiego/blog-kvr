module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000/api",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
