// 在webpack中，一切皆模块，都可以使用ES6导入语法进行导入和使用
// 使用 ES6 模块化的方式导入 jQuery
import $ from 'jquery'
// 使用 ES6 模块化的方式导入css样式
import './css/index.css'
// 使用 ES6 模块化的方式导入less样式
import './css/index.less'
// 使用 ES6 模块化的方式导入img图片
import logo from './imgs/logo.png'

//给img标签的src动态赋值
$('.logo').attr('src',logo)


// 定义 jQuery 入口函数
$(function(){
	// 实现奇偶行变色（隔行变色）
	$('div:odd').css('background-color','yellow')
	$('div:even').css('background-color','red')
})



