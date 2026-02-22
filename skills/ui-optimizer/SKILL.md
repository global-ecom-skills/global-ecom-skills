---
name: ui-optimizer
description: 产品页面 UI 优化智能体。基于 Google Material Design 规范和 skills.sh 对标产品，优化网页 UI/UX 设计。适用于产品展示页、落地页、技能展示网站的视觉优化。
---

# UI Optimizer - 产品页面 UI 优化智能体

基于 Google Material Design 规范，以 skills.sh 为对标产品，优化产品页面 UI/UX 设计。

## 核心原则

坚守四大核心原则：**简洁、清晰、克制、易用**

## 设计规范

### 1. 整体风格

**设计调性**
- 纯扁平化设计
- 极轻微阴影（浓度 ≤10%，模糊半径 ≤4px）
- 无复杂渐变

**色彩规范**
- 主色调不超过 2 种
- 辅助色仅使用中性色：
  - 白色: `#FFFFFF`
  - 浅灰: `#F5F5F5`
  - 中灰: `#EEEEEE`
  - 深灰文字: `#333333`
  - 次要文字: `#666666`
  - 辅助文字: `#999999`
- 主色调参考: `#1976D2`（蓝色）或 `#00D4AA`（青绿色）
- 错误色: `#D32F2F`

**字体规范**
- 字体族: `'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- 标题: 18-24px, font-weight: 600
- 正文: 14-16px, font-weight: 400
- 辅助文字: 12-13px, font-weight: 400
- 行高: 正文 1.5, 标题 1.2

**布局规范**
- 模块间距: ≥24px
- 内边距: ≥16px
- 卡片间距: ≥16px
- 最大内容宽度: 1200px

### 2. 头部导航

```css
/* 导航栏 */
header {
  background: #FFFFFF;
  height: 56px; /* 移动端 */ / 64px; /* PC端 */
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

/* Logo */
.logo {
  height: 32px;
  font-size: 20px;
  font-weight: 600;
}

/* 导航链接 */
nav a {
  color: #333333;
  font-size: 14px;
  padding: 8px 16px;
}

nav a:hover {
  color: #1976D2;
}

nav a.active {
  color: #1976D2;
  border-bottom: 2px solid #1976D2;
}

/* 搜索框 */
.search-input {
  border: none;
  border-radius: 8px;
  background: #F5F5F5;
  padding: 8px 16px;
  width: 240px;
}

.search-input:focus {
  outline: none;
  border: 1px solid #1976D2;
  background: #FFFFFF;
}

/* 主按钮 */
.btn-primary {
  background: #1976D2;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
}

.btn-primary:hover {
  background: #1565C0; /* 降低 20% */
}
```

### 3. Hero 区域

```css
.hero {
  background: #FFFFFF;
  padding: 64px 24px;
  text-align: center;
}

.hero h1 {
  font-size: 32px; /* PC */ / 24px; /* 移动端 */
  font-weight: 600;
  color: #333333;
  margin-bottom: 16px;
}

.hero p {
  font-size: 16px;
  color: #666666;
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

/* 安装命令框 */
.install-box {
  background: #F5F5F5;
  border: 1px solid #EEEEEE;
  border-radius: 8px;
  padding: 12px 20px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.install-box code {
  font-family: 'SF Mono', 'Roboto Mono', monospace;
  font-size: 14px;
  color: #333333;
}
```

### 4. 卡片组件

```css
.card {
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.card:hover {
  border-color: #1976D2;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.08);
  transform: translateY(-2px);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
}

.card-description {
  font-size: 14px;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-meta {
  font-size: 13px;
  color: #999999;
}

/* 徽章 */
.badge {
  background: #E3F2FD;
  color: #1976D2;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
}
```

### 5. 功能模块

```css
.features {
  background: #F5F5F5;
  padding: 64px 24px;
}

.features h2 {
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  text-align: center;
  margin-bottom: 48px;
}

.feature-item {
  text-align: center;
  padding: 24px;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
}

.feature-item p {
  font-size: 14px;
  color: #666666;
  line-height: 1.5;
}
```

### 6. 底部区域

```css
footer {
  background: #FFFFFF;
  border-top: 1px solid #EEEEEE;
  padding: 32px 24px;
  text-align: center;
}

footer p {
  font-size: 13px;
  color: #999999;
  margin-bottom: 8px;
}

footer a {
  color: #666666;
  text-decoration: none;
}

footer a:hover {
  color: #1976D2;
}
```

### 7. 响应式适配

```css
/* 移动端断点 */
@media (max-width: 768px) {
  /* 导航 */
  .nav-menu { display: none; }
  .hamburger { display: block; }
  
  /* 间距调整 */
  .hero { padding: 48px 16px; }
  .features { padding: 48px 16px; }
  
  /* 字体调整 */
  .hero h1 { font-size: 24px; }
  .hero p { font-size: 14px; }
  
  /* 卡片网格 */
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* 汉堡菜单 */
.hamburger {
  width: 24px;
  height: 24px;
  display: none;
}
```

### 8. 交互规范

**动画时长**
- 快速反馈: 150ms
- 标准过渡: 200ms
- 复杂动画: ≤300ms

**缓动函数**
- 标准: `ease`
- 进入: `ease-out`
- 退出: `ease-in`

**交互反馈**
```css
/* 按钮点击 */
.btn:active {
  transform: scale(0.98);
}

/* 链接悬停 */
a:hover {
  color: #1976D2;
  transition: color 0.15s ease;
}

/* 卡片悬停 */
.card:hover {
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
```

## 禁忌清单

### 视觉禁忌
- ❌ 复杂渐变
- ❌ 厚重阴影（浓度 >10%）
- ❌ 高饱和撞色
- ❌ 夸张装饰元素
- ❌ 字体层级混乱

### 布局禁忌
- ❌ 信息拥挤
- ❌ 留白不足
- ❌ 模块间距不均

### 交互禁忌
- ❌ 复杂动画（>300ms）
- ❌ 卡顿特效
- ❌ 反馈不清晰

## 优化流程

1. **分析现有页面** - 识别不符合规范的元素
2. **制定优化方案** - 列出具体修改项和参数
3. **实施优化** - 修改 HTML/CSS 代码
4. **验证效果** - 检查响应式适配和交互

## 示例

### 优化前
```css
/* 不规范 */
.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  border-radius: 20px;
}
```

### 优化后
```css
/* 符合规范 */
.card {
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
```

## 参考资源

- [Google Material Design](https://material.io/design)
- [skills.sh](https://skills.sh) - 对标产品
- [Inter Font](https://rsms.me/inter/)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)
