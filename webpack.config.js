const path = require('path');

const { config } = require('@pikpok/webpack');

module.exports = (env, argv) => {
    const generatedConfig = config(argv.mode, {
        features: {
            extcss: true,
            icons: {
                fontDest: 'src/fonts',
                scssDest: 'src/scss/0_settings/',
                src: 'src/icons',
            },
            scss: true,
            jquery: {
                external: false,
            },
        },

        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'main.js',
        },

        resolve: {
            extensions: ['.web.js', '.mjs', '.js', '.json', '.jsx'],
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },

        module: { 
            rules: [{ 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
            }]
        },

        devServer: {
            contentBase: path.join(__dirname, 'public'),
            hot: true,
        },
    });

    return generatedConfig;
};
