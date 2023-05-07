/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'], // 配置PurgeCSS以删除未使用的CSS
    darkMode: false, // 启用暗模式
    theme: {
      extend: {
        colors: {
          primary: '#1abc9c', // 添加自定义颜色
        },
        fontFamily: {
          sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'], // 添加自定义字体
        },
        spacing: {
          '96': '24rem', // 添加自定义间距
        },
        borderWidth: {
          '16': '16px', // 添加自定义边框宽度
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'], // 添加响应活动状态的背景颜色
      },
    },
    plugins: [],
  }
  

