const express = require('express');
const path = require('path');
const proxy = require('./server/proxy');
const config = require('./server/config');

const app = express();

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// プロキシ設定
app.use('/proxy', proxy);

// サーバー起動
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
