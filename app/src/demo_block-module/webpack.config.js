const path = require('path');

const config = {
  entry: './js/demo-block.jsx',
  output: {
    path: path.join(__dirname, '../../modules/demo_block/js'),
    filename: 'demo_block.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
    ]
  },
};

module.exports = config;