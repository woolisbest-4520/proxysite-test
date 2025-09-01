const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');

const proxy = createProxyMiddleware({
  target: config.targetUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/proxy': '', // "/proxy"パスをリクエストから削除
  },
  onError: (err, req, res) => {
    res.status(500).send('Proxy Error: ' + err.message);
  }
});

module.exports = proxy;
