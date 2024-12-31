import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Sumedha Niroshan",
  description: "Sumedha Niroshan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body>{children}</body>
    </html>
  );
}
