import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], variable: "--font-sans" })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Define o caminho local do arquivo de fonte
  variable: "--font-geist-sans", // Cria uma variável CSS para usar a fonte
  weight: "100 900", // Define os pesos permitidos para a fonte, de 100 a 900
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("min-h-screen, bg-background, font-sans, antialiased", inter.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
