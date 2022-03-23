# 项目 bug 和 迭代

- 接入 typescript，并在 typescript.json 里面配置装饰器语法

- 引入，node-sass，classnames，react-router，完成tab栏

- tsx import React 报错，目前使用 hack 的方法，在 tsconfig 里面加 "allowSyntheticDefaultImports": true,

- 导入 react-loadable 做懒加载，并使用 antDesign 的 loading 组件





















## 项目规范

1. 文件夹，文件名统一小写，多个单词以连接符 - 连接。         

2. JavaScript 变量名采用小驼峰标识，常量全部采用大写字母，组件采用大驼峰。          

3. CSS 采用普通 CSS 和 style-component 结合来编写 (全局采用普通CSS, 局部采用 styled-component)       

    - yarn add styled-components        

4. 整个项目不再使用 class 组件，统一使用函数式组件，使用 Hooks          

5. 所有的函数组件，为了不必要的渲染，全部使用 memo 进行包裹。         

6. 组件内部状态，使用 useState，useReducer；业务实际全部放在 redux 中管理。        

7. 函数组件内部基本按照如下顺序编写代码         

    1. 组件内部 state 管理          

    2. redux 的 hooks 代码        

    3. 其他组件的 hooks 代码       

    4. 其他逻辑代码         

    5. 返回 jsx 代码             

8. redux 代码规范如下：        

    1. 每个模块有自己独立的 reducer， 通过 combineReducer 进行合并         

    2. 异步请求代码使用 redux-thunk, 并且写在 actionCreators 中         

    3. redux 直接采用 redux hooks 方式编写，不再使用 connect          

9. 网络请求使用 axios        

    1. 对 axios 进行二次封装          

    2. 所有的模块请求会放到一个请求文件中单独管理           

10. 项目使用 AntDesign          

    - yarn add antd         

    - yarn add @ant-design/icons

## 项目流程

1. 首先初始化 css， 比如去除 body 的 margin 等.        

    - 可以用插件 yarn add normalize.css         

    - 新建一个 reset.css 文件，导入该包，加入自己想要的全局样式，最后在 index.js 导入          

2. 配置别名，方便之和组件的引入           

    - 用到插件，craco，可以在不暴露 webpack 配置的情况下，配置别名，yarn add @craco/craco         

    - 接着，修改 package.json 的脚本：详见改动部分      

    - 最后，在根目录下新建一个  craco.config.js 文件，在里面配置 webpack 的别名          

3. 划分目录结构。       

4. 配置路由        

    - yarn add react-router-dom; yarn add react-router-config(用于配置路由文件)        

    - router 文件夹新建 index.js,  配置 routes 数组，导出        

    - App 组件使用 HashRouter 包裹起来，(这里选择 hash 路由)       

    - 从 react-router-config 中导入函数 renderRoutes, 将 routes 作为参数传进去，执行          

    - 导航栏组件中用 NavLink 配置导航         





