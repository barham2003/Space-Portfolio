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
      <body className=" relative h-[4300px] w-[100%] !scroll-smooth p-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
