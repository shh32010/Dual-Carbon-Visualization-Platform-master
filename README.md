# 双碳可视化数据大屏平台

基于 Vue 3 + ECharts 5 + DataV 构建的碳排放数据可视化大屏，设计分辨率 1920×1080，支持自动缩放适配。

![Vue](https://img.shields.io/badge/Vue-3.2-4FC08D?logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-3.2-646CFF?logo=vite)
![ECharts](https://img.shields.io/badge/ECharts-5.6-AA344D?logo=apacheecharts)

## 功能

- 碳排放总量与趋势分析
- 碳交易数据统计
- 能源消耗监控
- 企业碳排放排名
- 区域碳排放分布（中国地图）

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.2 | 前端框架（Options API） |
| Vite | 3.2 | 构建工具 |
| Vuex | 4.1 | 状态管理 |
| Vue Router | 4.1 | 路由（hash 模式） |
| ECharts | 5.6 | 数据图表（自定义暗色主题） |
| DataV | 1.7 | 大屏装饰组件（边框、数字翻牌器） |
| Element Plus | 2.2 | UI 组件库 |
| Sass | 1.56 | CSS 预处理 |
| Axios | 0.27 | HTTP 请求 |

## 快速开始

```bash
# 安装依赖
pnpm i

# 启动开发服务器 (localhost:8080)
pnpm run dev

# 生产构建
pnpm run build:prod

# 预览构建
pnpm run preview
```

## 项目结构

```
src/
├── api/                    # 双套 Axios 体系
│   ├── api.js              # 大屏数据 API（token 从 localStorage 取）
│   └── system/             # 系统 API（独立 axios 实例）
├── components/
│   ├── echart/             # ECharts 封装（含 theme.json 暗色主题）
│   ├── item-wrap/          # DataV BorderBox13 卡片容器
│   ├── message/            # 消息通知
│   └── reacquire/          # 数据重试组件
├── store/modules/setting.js  # 全局设置（缩放、轮询间隔）
├── utils/
│   ├── drawMixin.js        # 屏幕缩放 mixin（基准 1920×1080）
│   └── map/china.json      # 中国地图 GeoJSON
├── views/
│   ├── home.vue            # 大屏外壳（标题 + 时钟 + router-view）
│   └── indexs/             # 九宫格面板
│       ├── index.vue       # 三列布局容器
│       ├── left-*.vue      # 左侧面板
│       ├── center-*.vue    # 中间面板
│       └── right-*.vue     # 右侧面板
└── main.js                 # 入口，注册全局组件和工具函数
```

## 环境变量

| 文件 | `VITE_APP_BASE_API` | 代理目标 |
|---|---|---|
| `.env.development` | `/dev-api` | `http://127.0.0.1:9090` |
| `.env.production` | `/prod-api` | — |
| `.env.staging` | `/stage-api` | — |

## 许可证

[MIT](LICENSE)
