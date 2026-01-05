import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sevendot VFX",
  description: "Transforming Pixels to Emotions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
