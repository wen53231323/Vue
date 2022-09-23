// path模块是node.js中处理路径的核心模块
const path = require('path')
// 导入 HTML 插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
	template: './src/index.html', // 指定原文件的存放路径
	filename: './index.html', // 指定生成文件的存放路径
})

// 导入插件，得到插件的构造函数并创建实例对象
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

// 使用 node.js 中的导出语法，向外导出一个webpack的配置对象
module.exports = {
	resolve: {
	    alias: {
	        //在 webpack 中设置代码中 @ 符号表示 src 这一层目录
            '@': path.join(__dirname, './src/')
        }
	},
	// 此选项生成的Source Map 能保证运行时报错的行号与源代码的行号保持一致
	devtool: 'eval-source-map',
	// mode用来指定构建模式（development开发模式、production生产模式）
	mode: 'development',
	// 打包入口文件的路径，即指定要处理哪个文件（__dirname表示当前文件路径）
	entry: path.join(__dirname, './src/index.js'),
	// 指定生成的文件要存放在哪里
	output: {
		// 输出文件的存放路径
		path: path.join(__dirname, './dist'),
		// 输出文件的名称
		filename: 'js/main.js'
	},
	// 指定插件的数组，webpack运行时会加载并调用这些插件
	plugins: [htmlPlugin,cleanPlugin],
	devServer: {
		open: true, // 初次打包完成后，自动打开浏览器
		host: '127.0.0.1', // 实时打包所使用的主机地址
		port: 80, // 实时打包所使用的端口号
	},
	// 所有第三方文件模块的匹配规则
	module: {
		// 文件后缀名的匹配规则
		rules: [
			{
				// test 表示匹配的文件类型
				test: /\.css$/,
				// use 表示对应要调用的 loader （顺序固定，从后往前）
				use: ['style-loader', 'css-loader']
			},
			{
				// test 表示匹配的文件类型
				test: /\.less$/,
				// use 表示对应要调用的 loader （顺序固定，从后往前）
				use: ['style-loader', 'css-loader','less-loader']
			},
			{
				// test 表示匹配的文件类型
				test: /\.jpg|png|gif$/,
				// ? 之后的是 loader 的参数项：
				// limit 用来指定图片的大小，单位是字节（byte）,只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片
				// outputPath用来指定打包后的文件存放在dist目录下的imgs文件夹中，limit的设置若生效，不会生成图片和imgs文件夹
				use: ['url-loader?limit=22229&outputPath=imgs']
			},
			{
				test: '/\.js$/',
				use:'babel-loader',
				exclude: /node_modules/
			},
		]
	}
}
