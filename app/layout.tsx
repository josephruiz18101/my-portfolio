import React from "react";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-900 text-white flex justify-between">
          <h1 className="text-xl font-bold">Joseph Ruiz</h1>
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
