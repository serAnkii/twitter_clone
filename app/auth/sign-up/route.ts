
import { Database } from '@/lib/database.types'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const uname = String(formData.get('uname'))
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { data,error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username: uname }
    }
  })

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Could not add user`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    )
  }
  else {

    await supabase.from("profiles").upsert({
      id:data.user?.id,
      username:uname,
    } as any)



    return NextResponse.redirect(
      `${requestUrl.origin}`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    )
  }
}
