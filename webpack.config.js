var webpack = require('webpack');

module.exports = {
    devServer: {//dev server
        inline: true, // all the changes will appear on the console
        contentBase: './src',//tell the context root of the application to the server
        port: 3000//server port suo
    },
    devtool: 'cheap-module-eval-source-map',//for getting proper error tracking the source code rather than minified
    entry: './dev/js/index.js',//input file
    module: {//modules to be loaded to run the webpack
        loaders: [
            {
                test: /\.js$/, // run babel on
                loader: 'babel',
                exclude: /node_modules/,
                query:
                    {
                        presets: ['react','es2015']
                    }
            }
        ]
    },
    output: {//destination folder
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
