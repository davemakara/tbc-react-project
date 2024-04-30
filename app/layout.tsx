import "./globals.css";

import { ReactNode } from "react";
import ThemeProviders from "./providers";
import { merienda } from "../fonts/font";

export const metadata = {
  title: "My App",
  description: "Your first NextJS app!",
  icons: {
    icon: "https://cdn.icon-icons.com/icons2/3833/PNG/512/logo_vercel_icon_234925.png",
  },
};

interface PageProps {
  children: ReactNode;
}

export default function RootLayout({ children }: PageProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merienda} font-merienda`}>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
