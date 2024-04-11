import Layout from "../UI/Layout";
import "../styles/index.css";
import "../styles/app.css";

import FavIcon from "../public/favicon.png";

export const metadata = {
  title: "TBC App",
  description: "Your first NextJS app!",
  icons: {
    icon: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_favicon_icon_130608.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}