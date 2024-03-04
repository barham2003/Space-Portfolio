import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space",
  description:
    "A Kurdish Software Company, which provides educational courses.",
  keywords: [
    "space",
    "software",
    "company",
    "education",
    "tech",
    "learning",
    "course",
    "auis",
    "kurd",
    "kurdish",
    "kurdish education",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative m-auto h-full w-full max-w-[1500px] !scroll-smooth px-4 py-4 pb-10 selection:bg-slate-500/20">
        {children}
      </body>
    </html>
  );
}
