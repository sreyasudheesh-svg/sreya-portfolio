import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sreya Sudheesh.M | Aspiring Software Developer",
  description: "The portfolio of Sreya Sudheesh.M, a first-year Computer Science and Engineering student and aspiring software developer.",
  openGraph: {
    title: "Sreya Sudheesh.M | Aspiring Software Developer",
    description: "A first-year CSE student learning, building, and growing in software development.",
    type: "website",
    siteName: "Sreya Sudheesh.M",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreya Sudheesh.M | Aspiring Software Developer",
    description: "A first-year CSE student learning, building, and growing in software development.",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
