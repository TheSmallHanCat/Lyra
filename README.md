# Lyra - React + Electron 桌面应用程序

![License](https://img.shields.io/badge/license-MIT-blue)

Lyra 是一个现代化的桌面应用程序，结合了 React 前端框架和 Electron 跨平台桌面应用技术。该项目分为两个主要部分：Lyra（React 前端）和 LyraElectron（Electron 封装层）。

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
├── Lyra.Electron/         # Electron 封装层
│   ├── main.js            # Electron 主进程文件
│   ├── server.js          # Electron 服务进程文件
│   └── index.html         # Electron 渲染进程入口
|
|
|—— Lyra.Core/             # 核心逻辑模块
│   ├── units/             # 通用工具函数
│   ├── data/              # 工程读取
│   └── ...                # 其他核心模块
|
|—— Lyra.Engine/           # 应用引擎模块
│   ├── <name>/            # 对应引擎模块
│   └──...                # 其他引擎模块
|
|—— Lyra.Plugins/          # 插件模块
│   ├── <name>/            # 对应插件模块
│   └──...                # 其他插件模块
|
|
└── README.md
```

## 功能特点

- 基于 React 19 和 TypeScript 的现代前端界面
- 使用 Vite 构建工具，提供快速热重载开发体验
- Electron 封装，支持 Windows、macOS 和 Linux 桌面平台
- 自定义启动页面，包含加载动画和状态显示
- 响应式设计，适配不同屏幕尺寸

## 技术栈

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Electron](https://www.electronjs.org/)
- CSS3

## 快速开始

### 克隆项目

```bash
git clone <repository-url>
```

### 安装依赖

```bash
# 安装 Lyra 前端依赖
cd Lyra
npm install

# 安装 LyraElectron 依赖
cd ../LyraElectron
npm install
```

### 开发模式

```bash
# 启动 React 开发服务器
cd Lyra
npm run dev

# 启动 Electron 应用
cd ../LyraElectron
npm start
```

### 构建项目

```bash
# 构建 React 应用
cd Lyra
npm run build
```

## 项目详情

### Lyra (React 前端)

Lyra 是基于 Vite 构建的 React 应用程序，包含自定义启动页面和主应用界面。

详细信息请查看 [Lyra/README.md](Lyra/README.md)

### LyraElectron (Electron 封装层)

LyraElectron 负责将 React 应用程序打包为桌面应用程序，管理应用窗口和系统交互。

详细信息请查看 [LyraElectron/README.md](LyraElectron/README.md)

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

该项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

团队名称: Isogelun

项目链接: [https://github.com/your_username/repository_name](https://github.com/your_username/repository_name)