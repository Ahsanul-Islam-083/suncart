// import { NextResponse } from 'next/server'
// import { auth } from './lib/auth'
// import { headers } from 'next/headers'

// // This function can be marked `async` if using `await` inside
// export async function proxy(request) {

//     const session = await auth.api.getSession({
//         headers: await headers()
//     })

//     if (!session) {
        
//         return NextResponse.redirect(new URL(`/signin?callbackURL=${callbackURL}`, request.url))
//     }
    
// }


// export const config = {
//     matcher: ['/profile','/products/:id'],
// }

import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers
    })

    if (!session) {
        const callbackURL = request.nextUrl.pathname
        return NextResponse.redirect(new URL(`/signin?callbackURL=${callbackURL}`, request.url))
    }
}

export const config = {
    matcher: ['/profile', '/products/:id'],
}