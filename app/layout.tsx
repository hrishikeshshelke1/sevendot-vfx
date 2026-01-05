import "./globals.css";

export const metadata = {
  title: "Sevendot VFX – Transforming Pixels to Emotions",
  description: "Matchmove, Roto, Paint & Compositing services by Sevendot VFX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
