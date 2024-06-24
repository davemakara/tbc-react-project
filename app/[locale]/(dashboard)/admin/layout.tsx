import { getSession } from "@auth0/nextjs-auth0";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session?.user.role[0] !== "admin") {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1>Youre not admin</h1>
      </div>
    );
  }
  return <main>{children}</main>;
}
