import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space",
  description: "A Software Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" h-[2000px] w-[100%] p-4 selection:bg-slate-300">
        {children}
      </body>
    </html>
  );
}
