import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        {/* Navbar - Full width and centered links */}
        <nav className="w-full bg-gray-900 text-white py-4">
          <div className="container mx-auto flex justify-center">
            <ul className="flex gap-12 text-lg">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content centered */}
        <main className="flex-grow flex justify-center items-center">
          <div className="w-full max-w-5xl px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
