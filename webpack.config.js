const path = require('path');
const browserPlugin = require('webpack-browser-plugin');
//const chromeUserDataDir = 'localhost:3333';

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
            crossOriginLoading: 'anonymous',
        },

        resolve: {
            extensions: ['.web.js', '.mjs', '.js', '.json', '.jsx'],
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },

        // plugins: [
        //     new browserPlugin({
        //         openOptions: {
        //             app: [
        //                 'chrome',
        //                 //'--incognito',
        //                 '--disable-web-security', // to enable CORS
        //                 '--user-data-dir=' + path.resolve(__dirname, 'public') // to let Chrome create and store here developers plugins, settings, etc.
        //             ]
        //         }
        //     })
        // ],

        module: { 
            rules: [{ 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader', 
            }]
        },

        devServer: {
            contentBase: path.join(__dirname, 'public'),
            stats: "errors-only",
            hot: true,
            historyApiFallback: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        },

        devtool: 'eval-source-map',
    });

    return generatedConfig;
};
