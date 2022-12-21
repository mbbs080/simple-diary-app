import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("usersCredentials");
        const result = await db
          .collection("usersCredentials")
          .findOne({ username: credentials.username });

        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        if (!result) {
          throw new Error("no user found");
        }

        if (!checkPassword) {
          throw new error("Incorrect username or password");
        }

        return result;
      },
    }),
  ],
});

/*  CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req){
        connectMongodb().catch(error => {error: "Connection failed..."})

      // check user existence
      const result = await Users.findOne({email: credentials.email})
      if (!result){
        throw new Error("No user found with Email Please Sign Up...")
      };

       // compare
       const checkPassword = await compare(credentials.password,result.password);

       // incorrect password
       if(!checkPassword || result.email !== credentials.email) {
        throw new Error("Email or Password doesn't match")
       }

       return result;

      }
    }) */
