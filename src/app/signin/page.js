'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

const SignIn = () => {

  const handleSignIn = async () => {
    await signIn('credentials', {
      username: 'test@test.com',
      password: 'password',
      callbackUrl: '/'
    })
  }

  return (
    <button onClick={handleSignIn}>
      Sign In
    </button>
  )
}

export default SignIn