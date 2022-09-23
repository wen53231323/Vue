module.exports = {
	// 声明babel可用的插件，webpack调用babel-loader时，会先加载plugin插件来使用
	plugin: [['@babel/plugin-proposal-decorators',{legacy: true},]]
}
