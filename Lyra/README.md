# Lyra - React + Electron 应用程序

Lyra 是一个基于 React 和 Electron 构建的现代化桌面应用程序。该项目包含两个主要部分：
1. Lyra - 基于 Vite 构建的 React 前端应用程序
2. LyraElectron - Electron 封装层，用于将 React 应用打包为桌面应用

## 项目结构

```
Lyra/
├── Lyra/                  # React 前端应用程序
│   ├── src/               # 源代码目录
│   │   ├── Startup/       # 启动页面组件
│   │   ├── assets/        # 静态资源
│   │   └── ...            # 其他源文件
│   ├── public/            # 公共资源目录
│   └── ...                # 配置文件等
│
├── LyraElectron/          # Electron 封装层
│   ├── main.js            # Electron 主进程文件
│   ├── server.js          # Electron 服务进程文件
│   └── index.html         # Electron 渲染进程入口
```

## 技术栈

- React 19
- TypeScript
- Vite
- Electron 38
- CSS3

## 启动页面

应用程序包含一个自定义启动页面，位于 `src/Startup` 目录中。该页面包含：
- 团队标识 (Isogelun)
- 应用名称 (Lyra)
- 加载状态指示器

## 开发环境搭建

### 前置要求

- Node.js (推荐使用最新 LTS 版本)
- npm 或 yarn 包管理器

### 安装依赖

在 Lyra 和 LyraElectron 目录中分别安装依赖：

```bash
# 安装 Lyra 前端依赖
cd Lyra
npm install

# 安装 LyraElectron 依赖
cd ../LyraElectron
npm install
```

### 运行开发服务器

```bash
# 运行 React 前端
cd Lyra
npm run dev

# 运行 Electron 应用
cd LyraElectron
npm start
```

## 构建和打包

### 构建 React 应用

```bash
cd Lyra
npm run build
```

构建后的文件将位于 `dist` 目录中。

### 打包 Electron 应用

目前项目中尚未配置 Electron 打包脚本，需要添加 electron-builder 或类似工具来创建可分发的应用程序。

## 自定义配置

### Vite 配置

Vite 配置文件位于 `vite.config.ts`。

### TypeScript 配置

项目包含多个 TypeScript 配置文件：
- `tsconfig.json` - 根配置文件
- `tsconfig.app.json` - 应用程序配置
- `tsconfig.node.json` - Node.js 相关配置

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

该项目尚未指定许可证。

## 联系方式

团队名称: Isogelun

项目链接: [https://github.com/your_username/repository_name](https://github.com/your_username/repository_name)