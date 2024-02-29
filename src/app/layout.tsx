import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body className=" relative w-[100%] !scroll-smooth p-4 selection:bg-slate-500/20">
        {children}
      </body>
    </html>
  );
}
