## tlfc

这个项目基于react构建，实现了一个协同文档的前端部分。

## 构建方法

这个项目需要先行安装npm包管理工具，安装完npm后可以按照如下顺序构建。

1.   `npm install`

     在对应目录下用terminal运行这个指令，这个指令用来安装本项目需要的依赖。如果因为网络原因安装失败，可使用如下指令将官方的依赖源修改为国内的依赖源：`npm config set registry https://registry.npm.taobao.org`

2.   `npm run start`

     该指令用来运行本项目，使用浏览器访问[http://localhost:3000](http://localhost:3000)可以看到项目的运行效果。

## 项目规范

1.文件夹、文件名称统一小写、多个单词以连接符（-）连接；

2.TypeScript变量名称采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰；

3.CSS采用普通CSS和styled-component结合来编写（全局采用普通CSS、局部采用styled-component）; 

4.整个项目统一使用函数式组件，拥抱Hooks；

5.所有的函数式组件，为了避免不必要的渲染，全部使用memo进行包裹；

6.组件内部的状态，使用useState、useReducer；业务数据全部放在redux中管理；

7.函数组件内部基本按照如下顺序编写代码：

-   组件内部state管理；

-   redux的hooks代码；

-   其他hooks相关代码（比如自定义hooks）；

-   其他逻辑代码；

-   返回JSX代码；

## 项目目录结构划分

assets：一些资源，包括css，img，字体，本地数据等。

base-ui：多个页面的共有UI风格。

components：抽取出的组件。

global：全局常量、全局注册。

hooks：自定义hooks。

router：前端路由，改变URL，但是页面不进行整体的刷新。

service：网络请求。

store：状态管理， 所有数据的变化，必须通过派发（dispatch）action来更新。

utils：抽象出的工具。

views：各页面的代码。

## 接口规范
