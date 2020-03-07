module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000/api/admin",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  }
};
