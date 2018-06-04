const path = require('path');
const webpack = require('webpack');
module.exports = {
 
    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
	/*src文件夹下面的以.js结尾的文件，要使用babel解析*/
 	/*cacheDirectory是用来缓存编译结果，下次编译加速*/
	 module: {
	     rules: [{
	         test: /\.js$/,
	         use: ['babel-loader?cacheDirectory=true'],
	         include: path.join(__dirname, 'src')
	     }]
	 },
	 devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,    
        open:true,
        inline: true,    
        hot: true, 
        proxy: {
	      "/api": "http://localhost:3000"
	    }
    },
     resolve: {
            alias: {
                pages: path.join(__dirname, 'src/pages'),
                component: path.join(__dirname, 'src/component'),
                router: path.join(__dirname, 'src/router'),
                redux: path.join(__dirname, 'src/redux')
            }
    },
	plugins:[
	     new webpack.HotModuleReplacementPlugin(),
	     
	]

};