# 2026 新年互动网页定制指南

这份指南将告诉您如何快速修改网页中的姓名、文字和个人信息。

## 1. 修改姓名与核心文字 (Hero Section)

打开文件：`src/components/sections/Hero.tsx`

*   **修改标题**：找到 `text="新年快乐"`，您可以将其改为 `text="致[姓名]"`。
*   **修改副标题**：找到 `<motion.p>` 标签内的文本，修改为您想说的话。

## 2. 修改 AI 祝福内容 (Wish Generator)

打开文件：`src/components/sections/WishGenerator.tsx`

*   **修改关系分类**：在 `const relations = [...]` 数组中修改或添加分类。
*   **修改预设祝福**：在 `const mockWishes` 对象中，根据分类修改对应的祝福语数组。

## 3. 修改音频 (Audio)

打开文件：`src/components/shared/BackgroundMusic.tsx`

*   **更换音乐**：找到 `<audio>` 标签中的 `src` 属性。
*   **建议**：将您的音乐文件放入 `public/` 目录下，然后将 `src` 改为 `/your-music.mp3`。

## 4. 修改全局字体

如果您想更换其他字体：
1. 将 `.ttf` 或 `.otf` 字体文件放入 `public/fonts/` 文件夹。
2. 在 `src/app/globals.css` 中的 `@font-face` 部分修改 `src: url(...)` 指向您的新文件。

## 5. 打包与分发

1. 在终端运行：`npm run build`
2. 运行完成后，根目录下会生成 `out` 文件夹。
3. 您可以将 `out` 文件夹中的内容上传到静态托管平台（如 GitHub Pages），或将其打包发送给他人。

---
祝您在 2026 年万事如意！
