import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Equalizer",
  description: "Landing Page for Equalizer",
  icons:{
    icon: "/assets/favicon-32x32.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} h-full antialiased bg-offwhite text-dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
