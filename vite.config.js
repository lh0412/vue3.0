import { defineConfig } from 'vite';  //帮手函数，这样不用jsdoc注解也可以获取类型提示
import { resolve } from 'path';   //主要英语alias文件路径别名
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite' //element plus 按需引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
  })], //配置需要使用的插件列表，这里将vue添加进去
  build: { //打包配置
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', //指定生成静态资源的存放路径
    minify: 'terser' //混淆器
  },
  server: {
    cors: true,  //默认启用并允许任何源
    open: true,  //在服务器启动时自动在浏览器中打开应用程序
    proxy: { //反向代理配置
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
