import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus",
  description: "Video-call App",
  icons: {
    icon: './icons/N_NEXUS_logo-removebg-preview.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      localization={{
        signIn: {
          start: {
            title: "Sign in to Nexus", // Correct path to change the title
          },
        },
      }}
      appearance={{
        layout: {
          logoImageUrl: '/icons/NEXUS_logo-removebg-preview (1).png',
          socialButtonsVariant: 'iconButton',
        },
        variables: {
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: '#1c1f2e',
          colorInputBackground: '#252a41',
          colorInputText: '#fff'
        }
      }}
      >
      <body className={`${inter.className} bg-dark-5`}>
        {children}
        <Toaster />
      </body>
      </ClerkProvider>
    </html>
  );
}
