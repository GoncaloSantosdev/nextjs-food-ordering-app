import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Components
import { Header, Notification, Footer, Banner } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Notification />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
