import { getSession } from "@auth0/nextjs-auth0";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session?.user.role[0] !== "admin") {
    return <h1>Youre not admin</h1>;
  }
  return <main>{children}</main>;
}
