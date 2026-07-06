# Thumbdata3 查看器

`thumbdata3-viewer` 是基于 HTML5 的本地浏览器工具，用于查看 Android `thumbdata` 类文件中的缩略图，也可作为通用 JPEG 图片提取工具使用。

工具在浏览器端运行，文件处理过程在本地浏览器内完成。文件不会上传到服务器。

## 主要文件

```text
src/index.pug      页面模板
src/index.ts       页面交互
src/worker.ts      文件解析
src/thumbparser.ts 解析逻辑
webpack.config.js  构建配置
docs/              发布目录
```

## 在线使用

```text
https://Rogerma12345.github.io/thumbdata3-viewer/
````

主要功能如下：
1. 读取 `thumbdata` 类文件。
2. 从未加密文件中提取 JPEG 图片。
3. 在浏览器中预览提取结果。
4. 支持单张图片下载。
5. 支持将全部图片打包为 zip 文件下载。

## 开发说明

### 1. 准备环境

```bash
git clone https://github.com/Rogerma12345/thumbdata3-viewer.git
cd thumbdata3-viewer
npm install
```

### 2. 生成构建

```bash
npm run build
```

构建完成后，发布文件位于：

```text
./docs
```

构建产物包括：

```text
docs/index.html
docs/index.js
docs/worker.js
```

### 3. 本地预览

```bash
npx serve ./docs
```

然后打开本地服务给出的页面地址。

### 4. 开发模式

```bash
npm run watch
```

源码变更后，webpack 会重新生成 `docs` 目录中的页面文件。
