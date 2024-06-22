import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from 'next-auth/react'

export const AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log(credentials, 'credentials')
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST };

