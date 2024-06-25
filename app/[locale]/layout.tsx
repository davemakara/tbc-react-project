import "./globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";

import { ReactNode } from "react";
import ThemeProviders from "./providers";
import { noto_serif } from "../../fonts/fonts";

import { I18nProviderClient } from "../../locales/client";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "FlowRecords",
  description: "Your Music App!",
  // icons: {
  //   icon: "https://cdn.icon-icons.com/icons2/3833/PNG/512/logo_vercel_icon_234925.png",
  // },
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
      <UserProvider>
        <body className={`${noto_serif} font-noto_serif`}>
          <I18nProviderClient locale={locale}>
            <ThemeProviders>
              <Header />
              {children}
              <Footer />
            </ThemeProviders>
          </I18nProviderClient>
        </body>
      </UserProvider>
    </html>
  );
}
