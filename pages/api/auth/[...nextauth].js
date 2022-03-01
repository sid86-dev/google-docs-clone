import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {FirebaseAdapter} from "@next-auth/firebase-adapter"
import {db} from '../../../firebase-config'

export default NextAuth({
    providers: [
        // OAuth authentication providers...
        GoogleProvider({
            clientId: '381555884526-1ne4qphqcflon5b3fv2phttdool64luj.apps.googleusercontent.com',
            clientSecret: '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'
        }),
    ],
    adapter: FirebaseAdapter(db),


})