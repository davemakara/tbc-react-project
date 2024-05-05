import "./globals.css";

import { ReactNode } from "react";
import ThemeProviders from "./providers";
import { noto_serif } from "../../fonts/fonts";

import { I18nProviderClient } from "../../locales/client";

export const metadata = {
  title: "My App",
  description: "Your first NextJS app!",
  icons: {
    icon: "https://cdn.icon-icons.com/icons2/3833/PNG/512/logo_vercel_icon_234925.png",
  },
};

// interface PageProps {
//   children: ReactNode;
// }

export default function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactNode;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${noto_serif} font-noto_serif`}>
        <I18nProviderClient locale={locale}>
          <ThemeProviders>{children}</ThemeProviders>
        </I18nProviderClient>
      </body>
    </html>
  );
}
