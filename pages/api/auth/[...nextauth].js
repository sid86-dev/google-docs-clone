import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {FirebaseAdapter} from "@next-auth/firebase-adapter"
import {db} from '../../../firebase-config'

export default NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: {process.env.NEXT_PUBLIC_GOOGLE_CLIENTID},
            clientSecret: {process.env.NEXT_PUBLIC_GOOGLE_CLIENTSECRET}
        }),
    ],
    adapter: FirebaseAdapter(db),


})
