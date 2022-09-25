module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // Element UI 按需导入配置
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
