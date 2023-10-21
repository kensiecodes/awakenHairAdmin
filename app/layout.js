import "./globals.css";

import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Awaken Hair",
  description: "Earth-loving, hair-loving products",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500&family=Proza+Libre:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-jade">
        <SessionProvider session={session}>
          <div className="md:flex">
            <Navbar session={session} />
            <div className="max-md:mx-5 rounded-xl mt-10 p-10  md:w-5/6 min-h-[90vh] overflow-y-scroll m-auto bg-white">
              {children}
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
