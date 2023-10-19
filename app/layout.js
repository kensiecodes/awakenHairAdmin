import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

export const metadata = {
  title: "Awaken Hair",
  description: "Earth-loving, hair-loving products",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
