import "./globals.css";

export const metadata = {
  title: "Sevendot VFX | Transforming Pixels to Emotions",
  description: "Matchmove, Roto, Paint & Compositing VFX Studio",
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
