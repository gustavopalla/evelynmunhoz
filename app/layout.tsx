import type { Metadata } from "next";
import {
  Alex_Brush,
  Cormorant_Garamond,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const brush = Alex_Brush({
  variable: "--font-brush",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Evelyn Munhoz, UGC Creator",
  description:
    "Portfólio de Evelyn Munhoz: vídeos e fotos UGC para marcas de beleza, moda e lifestyle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${playfair.variable} ${cormorant.variable} ${brush.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
