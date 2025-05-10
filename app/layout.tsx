import type { Metadata } from "next";
import "./globals.css";
import { lustria } from "@/app/ui/fonts";
import Footer from "@/app/ui/Footer";
import Header from "@/app/ui/Header";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Demonstrating 3D, Crypto and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const auth = cookieStore.get("auth");
  return (
    <html lang="en">
      <body className={`${lustria.className} antialiased h-full`}>
        <div className="flex flex-col h-screen">
          <div className="p-5 pb-1 text-center flex-none">
            <Header />
          </div>
          <div className="p-5 text-center flex-grow items-center justify-center">
            {children}
          </div>
          <div className="p-5 text-left flex-none">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
