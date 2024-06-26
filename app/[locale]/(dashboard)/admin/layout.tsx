import NotAdmin from "@/components/admin/NotAdmin";
import { getSession } from "@auth0/nextjs-auth0";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session?.user.role[0] !== "admin") {
    return <NotAdmin />;
  }
  return <main>{children}</main>;
}
