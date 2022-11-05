import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signOut } from "next-auth/react"


export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',

        }),

    ],
    pages: {
        signIn: "/auth/signin"
    }
})