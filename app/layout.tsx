import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A simple task management application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {children}
        {/* </ThemeProvider> */}
        </body>
    </html>
  );
}
