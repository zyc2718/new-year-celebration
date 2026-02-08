import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "致童怿雅 —— 一封来自远方的信件",
  description: "2026 新年定制感官体验",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
