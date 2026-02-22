# 🌐 Global E-commerce Skills

> **跨境电商 AI Agent Skills 生态系统**
> 
> 帮助你发现热销、高利润的跨境电商选品机会

[![Skills](https://img.shields.io/badge/skills-2-blue)](./skills)
[![License](https://img.shields.io/badge/license-Apache%202.0-green)](./LICENSE)

## 📖 关于本仓库

本仓库包含专为跨境电商设计的 AI Agent Skills。这些 Skills 可以帮助你：

- 🔍 **发现热销商品** - 从 Amazon、Temu 等平台发现热卖商品
- 💰 **分析利润空间** - 对比 1688 供应商价格，计算套利空间
- 🤖 **自动化操作** - 自动登录各电商平台，保持会话状态
- 📊 **生成选品报告** - 自动生成包含完整数据的选品分析报告

## 🚀 快速开始

### 安装方式

**方式一：使用 npx（推荐）**
```bash
npx skills install global-ecom-skills/global-ecom-skills/cross-border-product-scout
```

**方式二：手动安装**
1. 克隆本仓库
2. 将 `skills/` 目录下的 skill 文件夹复制到你的 Agent 工作目录

### 在 Claude Code 中使用
```bash
/plugin marketplace add global-ecom-skills/global-ecom-skills
```

## 📦 可用 Skills

| Skill | 描述 | 状态 |
|-------|------|------|
| [cross-border-product-scout](./skills/cross-border-product-scout) | 跨境电商选品智能体，发现 Amazon→Temu→1688 套利机会 | ✅ 可用 |
| [platform-auto-login](./skills/platform-auto-login) | 电商平台自动登录，支持 Temu/Amazon/1688 | ✅ 可用 |

## 📁 目录结构

```
global-ecom-skills/
├── skills/                    # 所有 Skills
│   ├── cross-border-product-scout/
│   │   ├── SKILL.md          # Skill 定义文件
│   │   ├── README.md         # 使用说明
│   │   └── references/       # 参考资料
│   └── platform-auto-login/
│       ├── SKILL.md
│       └── README.md
├── template/                  # Skill 模板
│   └── SKILL.md
├── docs/                      # 文档
│   └── creating-skills.md
├── website/                   # 展示网站
│   └── index.html
└── README.md
```

## 🛠️ 创建自定义 Skill

使用 `template/` 目录下的模板创建你自己的 Skill：

```yaml
---
name: my-skill-name
description: 清晰描述这个 skill 的功能和使用场景
---

# My Skill Name

[在这里添加 Claude 执行此 skill 时需要遵循的指令]

## 示例
- 示例用法 1
- 示例用法 2

## 指南
- 指南 1
- 指南 2
```

## 🤝 贡献

欢迎提交 Pull Request！请确保：

1. Skill 有清晰的 `SKILL.md` 文件
2. 包含 `README.md` 说明文档
3. 经过测试验证

## 📄 许可证

Apache 2.0 License

---

**Made with ❤️ for Cross-border E-commerce**
