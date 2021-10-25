const path = require('path');
const __dirname = path.resolve();

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'cumulus.bundle.js',
        library: ['cumulus'],
    },
    optimization: {
        minimize: true,
    }
};