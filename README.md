# 🧱 layout-stack

A lightweight and reusable set of React layout components built with Tailwind CSS.

Includes: `HStack`, `VStack`, `Stack`, `ZStack`, and `Spacer` — inspired by layout patterns from SwiftUI, Figma, and other design tools.

## 📦 Installation

```bash
npm install layout-stack
```

Or use Yarn / pnpm:

```bash
yarn add layout-stack
# or
pnpm add layout-stack
```

> ⚠️ **Peer Dependencies:**
>
> - React 18+
> - Tailwind CSS (make sure your project has it properly configured)
> - `clsx` is used internally and handled as a peer dependency

---

## 🚀 Quick Usage

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
        <div className="bg-red-200">Layer 1</div>
        <div className="bg-green-200">Layer 2</div>
      </ZStack>
    </VStack>
  );
}
```

---

## 📚 Component Overview

### `HStack`

Horizontally arranges children using `flex-row` and `space-x-{spacing}`.

```tsx
<HStack spacing="4" className="bg-white">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</HStack>
```

### `VStack`

Vertically arranges children using `flex-col` and `space-y-{spacing}`.

```tsx
<VStack spacing="6">
  <div>Title</div>
  <div>Description</div>
</VStack>
```

### `Stack`

Similar to `VStack` but aligns items with `items-start`.

```tsx
<Stack spacing="3">
  <div>Item A</div>
  <div>Item B</div>
</Stack>
```

### `ZStack`

Stacks elements on top of each other with `relative` and `absolute` positioning.

```tsx
<ZStack className="h-48">
  <div className="bg-blue-100" />
  <div className="bg-blue-300" />
</ZStack>
```

### `Spacer`

Fills available space inside a flex container, equivalent to `<div className="flex-1" />`.

```tsx
<HStack>
  <div>Left</div>
  <Spacer />
  <div>Right</div>
</HStack>
```

---

## 🧩 Export

You can import components individually or via the default export:

```tsx
import LayoutStack from "layout-stack";
// or
import { HStack, VStack, Stack, ZStack, Spacer } from "layout-stack";
```

---

## 🛠️ Notes for Developers

- Written in TypeScript with full type support
- Tailwind utility classes are preserved in the output, ensure your host project has Tailwind properly configured

---

## 📄 License

MIT

---

Made with ❤️ by Jiangtaste
