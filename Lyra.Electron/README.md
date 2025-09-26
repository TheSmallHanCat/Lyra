# LyraElectron

LyraElectron 是 Lyra 项目的 Electron 封装层，用于将基于 React 的 Web 应用程序打包为桌面应用程序。

## 项目结构

```
LyraElectron/
├── main.js           # Electron 主进程文件
├── server.js         # Electron 服务进程文件（备用）
├── index.html        # Electron 渲染进程入口文件
├── package.json      # 项目配置和依赖
└── ...               # 其他配置文件
```

## 技术栈

- Electron 38
- Node.js

## 功能

- 创建桌面应用程序窗口
- 加载本地 HTML 文件
- 管理应用程序生命周期

## 开发

### 安装依赖

```bash
npm install
```

### 运行应用

```bash
npm start
```

这将启动 Electron 应用程序并加载 [index.html](index.html) 文件。

## 主要文件说明

### main.js

Electron 主进程文件，负责：
- 创建应用程序窗口
- 管理应用程序生命周期
- 处理系统事件

### server.js

备用的 Electron 主进程文件，包含类似功能但配置略有不同。

### index.html

Electron 渲染进程入口文件，目前包含简单的 Hello World 示例。

## 自定义

要加载 Lyra React 应用，需要修改 [main.js](main.js) 文件中的 `loadFile` 路径，指向 Lyra 项目构建后的文件。

## 打包

目前项目尚未配置打包工具，可考虑使用以下工具之一：
- electron-builder
- electron-forge

## 许可证

该项目尚未指定许可证。

## 联系方式

团队名称: Isogelun