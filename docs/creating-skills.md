# 创建自定义 Skills

本指南介绍如何为跨境电商场景创建自定义 Skills。

## 什么是 Skill？

Skill 是一个包含指令、脚本和资源的文件夹，AI Agent 可以动态加载它来提升特定任务的执行能力。Skill 教会 Agent 如何以可重复的方式完成特定任务。

## Skill 结构

一个标准的 Skill 目录结构如下：

```
my-skill/
├── SKILL.md          # 必需：Skill 定义文件
├── README.md         # 推荐：使用说明
├── references/       # 可选：参考资料
│   ├── api-docs.md
│   └── examples.md
└── scripts/          # 可选：辅助脚本
    └── helper.py
```

## SKILL.md 格式

SKILL.md 是 Skill 的核心文件，包含 YAML frontmatter 和 Markdown 内容：

```yaml
---
name: my-skill-name
description: 清晰描述这个 skill 的功能和使用场景
---

# My Skill Name

[指令内容]
```

### Frontmatter 字段

| 字段 | 必需 | 描述 |
|------|------|------|
| `name` | ✅ | Skill 的唯一标识符（小写，用连字符分隔） |
| `description` | ✅ | 完整描述 Skill 的功能和使用场景 |

## 最佳实践

### 1. 清晰的描述

描述应该让 Agent 能够判断何时使用这个 Skill：

```yaml
# ❌ 不好的描述
description: 选品工具

# ✅ 好的描述
description: 跨境电商选品智能体。用于发现亚马逊热卖品并搬运到 Temu 销售的套利机会。
```

### 2. 结构化的指令

使用清晰的标题和列表组织指令：

```markdown
## 工作流程

1. **第一步**: 获取 Amazon 热销榜数据
2. **第二步**: 在 Temu 搜索同类商品
3. **第三步**: 在 1688 查找供应商
4. **第四步**: 计算利润空间
```

### 3. 提供示例

包含具体的输入输出示例：

```markdown
## 示例

### 查找厨房用品选品机会

用户: 帮我分析厨房用品类目的选品机会
Agent: [执行选品分析流程，生成报告]
```

### 4. 明确限制

说明 Skill 的限制和不支持的场景：

```markdown
## 限制

- 需要浏览器支持才能访问电商平台
- 1688 可能需要手动完成验证码
- 价格数据可能有延迟
```

## 跨境电商 Skill 特殊考虑

### 平台访问

- 考虑平台的登录状态管理
- 处理反爬虫机制
- 支持多语言界面

### 数据处理

- 货币转换
- 价格对比
- 利润计算

### 合规性

- 遵守平台使用条款
- 保护用户隐私
- 不存储敏感信息

## 测试你的 Skill

1. 在本地 Agent 环境中加载 Skill
2. 测试各种使用场景
3. 验证输出格式
4. 检查错误处理

## 提交到仓库

1. Fork 本仓库
2. 在 `skills/` 目录下创建你的 Skill 文件夹
3. 确保包含 `SKILL.md` 和 `README.md`
4. 提交 Pull Request

---

如有问题，请在 GitHub Issues 中提问。
