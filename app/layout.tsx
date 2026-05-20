import type { Metadata } from "next";
import { Fascinate } from "next/font/google";
import "./globals.css";

const fascinate = Fascinate({
  weight: "400",
  variable: "--font-fascinate",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corner Lab",
  description: "Cute creature quiz",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fascinate.variable} h-full antialiased`}
    >
      <body className="min-h-full h-full flex justify-center bg-amber-100 p-4">
        
        <div className="bg-[#fffaea] border-2 border-[#3b3b3b] max-w-[480px] w-full h-full mx-auto rounded-2xl p-4 overflow-y-auto overflow-x-hidden">
        {children}
        </div>
 
        </body>
    </html>
  );
}
