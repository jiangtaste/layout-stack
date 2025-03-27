# 🧱 layout-stack

一组轻量、可复用的 React 布局组件，使用 Tailwind CSS 构建，适用于现代前端项目。

包括：`HStack`, `VStack`, `Stack`, `ZStack`, `Spacer` 等，设计灵感来自 SwiftUI/Figma 等开发工具的 Stack 概念。

## 📦 安装

```bash
npm install layout-stack
```

你也可以使用 Yarn 或 pnpm：

```bash
yarn add layout-stack
# 或
pnpm add layout-stack
```

> ⚠️ **依赖要求：**
>
> - React 18+
> - Tailwind CSS 已配置（确保启用了 `space-x-*`, `space-y-*`, `flex`, `relative` 等常规 utility 类）
> - `clsx` 会自动作为 peer 依赖一起处理

---

## 🚀 快速使用

```tsx
import { HStack, VStack, Stack, ZStack, Spacer } from "layout-stack";

export default function Example() {
  return (
    <VStack spacing="4" className="w-full">
      <HStack spacing="2">
        <span>Item 1</span>
        <span>Item 2</span>
        <Spacer />
        <span>Right</span>
      </HStack>

      <ZStack className="h-32 bg-gray-100">
        <div className="absolute inset-0 bg-red-200">Layer 1</div>
        <div className="absolute inset-4 bg-green-200">Layer 2</div>
      </ZStack>
    </VStack>
  );
}
```

---

## 📚 组件介绍

### `HStack`

水平排列子元素，内部使用 `flex-row` 和 `space-x-{spacing}`。

```tsx
<HStack spacing="4" className="bg-white">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</HStack>
```

### `VStack`

垂直排列子元素，内部使用 `flex-col` 和 `space-y-{spacing}`。

```tsx
<VStack spacing="6">
  <div>Title</div>
  <div>Description</div>
</VStack>
```

### `Stack`

与 `VStack` 类似，但 `items-start` 对齐。

```tsx
<Stack spacing="3">
  <div>Item A</div>
  <div>Item B</div>
</Stack>
```

### `ZStack`

用于堆叠布局，类似 `position: relative + absolute`。

```tsx
<ZStack className="h-48">
  <div className="absolute inset-0 bg-blue-100" />
  <div className="absolute inset-4 bg-blue-300" />
</ZStack>
```

### `Spacer`

自动撑开剩余空间，等价于 `<div className="flex-1" />`。

```tsx
<HStack>
  <div>Left</div>
  <Spacer />
  <div>Right</div>
</HStack>
```

---

## 🧩 导出方式

你可以使用默认导出或命名导出：

```tsx
import LayoutStack from "layout-stack";
// 或
import { HStack, VStack, Stack, ZStack, Spacer } from "layout-stack";
```

---

## 🛠️ 开发者说明

- 本组件使用 TypeScript 编写，自动附带类型定义
- Tailwind class 字符串会保留在构建结果中，使用方项目需要配置 Tailwind

---

## 📄 License

MIT

---

Made with ❤️ by Jiangtaste
