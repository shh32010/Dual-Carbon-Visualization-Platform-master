# 双碳可视化平台

基于 Vue 3 + Element Plus + ECharts + DataV 构建的双碳数据可视化大屏平台，用于碳排放数据的实时展示与分析。

## 项目简介

本系统是双碳管理平台的数据可视化模块，通过大屏展示的方式，将碳排放、碳交易、能源消耗等关键数据以图表、地图、动态滚动等形式直观呈现，辅助管理者进行碳排放监控与决策分析。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.2.45 | 前端框架 |
| Element Plus | 2.2.27 | UI 组件库 |
| Vite | 3.2.3 | 构建工具 |
| Vue Router | 4.1.4 | 路由管理 |
| Pinia | 2.0.22 | 状态管理 |
| Axios | 0.27.2 | HTTP 请求 |
| ECharts | 5.6.0 | 数据可视化图表 |
| DataV | 1.7.2 | 数据可视化组件库 |
| D3.js | 7.8.5 | 数据驱动文档 |
| Sass | 1.56.1 | CSS 预处理器 |
| vue3-seamless-scroll | 2.0.1 | 无缝滚动组件 |
| element-resize-detector | 1.2.4 | 元素尺寸监听 |

## 项目结构

```
Dual-Carbon-Visualization-Platform-master/
├── public/                  # 静态资源
├── src/
│   ├── api/                 # 接口请求模块
│   │   ├── modules/         # 业务接口模块
│   │   └── system/          # 系统接口
│   ├── assets/              # 静态资源（图片、样式等）
│   ├── components/          # 公共组件
│   │   ├── echart/          # ECharts 封装组件（含主题配置）
│   │   ├── item-wrap/       # 通用卡片容器组件
│   │   ├── message/         # 消息提示组件
│   │   └── reacquire/       # 数据重获取组件
│   ├── config/              # 配置文件
│   ├── directives/          # 自定义指令
│   ├── layout/              # 页面布局
│   ├── lib/                 # 第三方库
│   ├── plugins/             # 插件
│   ├── router/              # 路由配置
│   ├── store/               # Pinia 状态管理
│   ├── utils/               # 工具函数
│   ├── views/
│   │   ├── indexs/          # 可视化大屏主页面
│   │   │   ├── index.vue    # 大屏入口
│   │   │   ├── left-top.vue     # 左上区域
│   │   │   ├── left-center.vue  # 左中区域
│   │   │   ├── left-bottom.vue  # 左下区域
│   │   │   ├── center.vue       # 中心区域
│   │   │   ├── center-top.vue   # 中上区域
│   │   │   ├── center-bottom.vue# 中下区域
│   │   │   ├── right-top.vue    # 右上区域
│   │   │   ├── right-center.vue # 右中区域
│   │   │   └── right-bottom.vue # 右下区域
│   │   ├── home.vue         # 首页
│   │   └── setting.vue      # 设置页
│   ├── App.vue              # 根组件
│   ├── main.js              # 入口文件
│   └── settings.js          # 全局配置
├── vite.config.js           # Vite 配置
├── .env.development         # 开发环境变量
├── .env.production          # 生产环境变量
├── .env.staging             # 测试环境变量
└── package.json             # 项目依赖
```

## 功能特性

### 数据可视化大屏
- **九宫格布局** — 左/中/右 × 上/中/下的多区域大屏布局
- **ECharts 图表** — 折线图、柱状图、饼图、地图等多种图表类型
- **DataV 组件** — 边框装饰、数字翻牌器等大屏特效组件
- **D3.js 可视化** — 高度自定义的数据驱动图表
- **无缝滚动** — 数据列表自动滚动展示

### 数据展示内容
- 碳排放总量与趋势分析
- 碳交易数据统计
- 能源消耗监控
- 企业碳排放排名
- 区域碳排放分布

### 系统管理
- 用户认证与权限管理
- 可视化配置管理

## 安装部署

### 环境要求

- **Node.js** >= 16
- **pnpm**（推荐）

### 安装步骤

```bash
# 安装 pnpm（如未安装）
npm i pnpm -g

# 配置淘宝镜像源（可选）
pnpm config set registry https://registry.npmmirror.com/

# 安装依赖
pnpm i

# 启动开发服务器
pnpm run dev

# 生产环境打包
pnpm run build:prod

# 预览打包结果
pnpm run preview
```

## 配置说明

### 环境变量

| 文件 | 说明 |
|------|------|
| `.env.development` | 开发环境配置 |
| `.env.production` | 生产环境配置 |
| `.env.staging` | 测试环境配置 |

### 全局配置

编辑 `src/settings.js` 可修改系统标题、主题色等全局设置。

### 大屏布局

大屏采用九宫格布局，各区域组件位于 `src/views/indexs/` 目录下，可按需调整各区域展示的图表和数据。

## 许可证

[MIT](LICENSE)
