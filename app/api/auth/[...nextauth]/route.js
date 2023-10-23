import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // OAuth authentication providers... methods for sign-in
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  adapter: MongoDBAdapter(clientPromise),
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
