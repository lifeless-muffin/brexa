import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/components/navigation/navbar";

export const metadata: Metadata = {
  title: "BREXA",
  description: "Brexa - Online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body>
        <div className="layout_nav_wrapper">
          <Navbar />
        </div>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
