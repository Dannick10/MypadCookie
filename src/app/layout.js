import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MypadCookie",
  description: "clique no seu biscoito e ganhe um console novo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Clique no seu biscoito e ganhe um console novo" />
        <meta name="keywords" content="biscoito, console, prêmio, jogo, diversão" />
        <meta name="author" content="Daniel Rocha" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
