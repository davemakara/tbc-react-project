import Layout from "../UI/Layout";
import "../styles/index.css";
import "../styles/app.css";

export const metadata = {
  title: "NextJS TBC App",
  description: "Your first NextJS app!",
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
