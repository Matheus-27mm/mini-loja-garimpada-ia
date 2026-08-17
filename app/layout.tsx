import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garimpada da Net | Achados Tech & Gamer",
  description: "Curadoria de produtos de tecnologia, áudio e setup gamer encontrados no Mercado Livre.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
