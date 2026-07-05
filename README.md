`thumbdata3-viewer` 是基于 HTML5 的本地浏览器工具，用于查看 Android `thumbdata` 类文件中的缩略图，也可作为通用 JPEG 图片提取工具使用。

该工具在浏览器端运行，文件处理过程在浏览器所在的本地主机完成。

# 开发说明

## 1. 准备环境

先克隆项目源码，并安装所需依赖：

```bash
git clone https://github.com/x0a/thumbdata3-viewer.git
npm install -g webpack
cd thumbdata3-viewer
npm install
```

# 2. 生成构建

需要生成构建文件时，运行：

```bash
npm run build
```

构建完成后，`./dist` 目录中的文件即可用于分发或开发。


## 3. 开发构建

开发过程中可运行以下命令：

```bash
npm run watch
```

该命令会启动 webpack 的监听模式。源码变更后，webpack 会自动重新构建输出文件。

随后运行：

```bash
npx serve ./dist
```

打开本地页面：

```text
http://localhost:5000
```

也可以在浏览器中打开以下本地文件：

```text
./dist/index.html
```

修改源码并重新构建后，刷新浏览器页面即可查看结果。