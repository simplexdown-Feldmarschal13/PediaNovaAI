import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PediaNova AI — Individualized Pediatric Clinical Intelligence",
  description:
    "PediaNova AI is an artificial intelligence–powered pediatric clinical decision support platform designed to enable individualized, data-driven, and ethically responsible medical decision-making.",
  applicationName: "PediaNova AI",
  authors: [{ name: "PediaNova AI Research Team" }],
  generator: "Next.js",
  keywords:
    "pediatrics, clinical decision support, pediatric AI, medical artificial intelligence, healthcare data, evidence-based medicine",
  openGraph: {
    title: "PediaNova AI — Individualized Pediatric Clinical Intelligence",
    description:
      "PediaNova AI is an artificial intelligence–powered pediatric clinical decision support platform designed to enable individualized, data-driven, and ethically responsible medical decision-making.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
