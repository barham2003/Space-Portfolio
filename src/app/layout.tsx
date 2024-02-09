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
      <body className=" h-[4300px] w-[100%] p-4">{children}</body>
    </html>
  );
}
