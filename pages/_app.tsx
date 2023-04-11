import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import LoggedInLayout from '@/layouts/logged-in'
import LogInLayout from '@/layouts/log-in'
import Login from './login'
import Loading from '@/share/organisms/loading'
import { useAuth } from '@/hooks'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  const isAuth = useAuth()
  return (
    <RecoilRoot>
      <ChakraProvider>
        {
          isAuth === undefined ? <Loading /> :
            isAuth === null ?
              <LogInLayout>
                <Login {...pageProps} />
              </LogInLayout> :
              <LoggedInLayout>
                <Component {...pageProps} />
              </LoggedInLayout>
        }
      </ChakraProvider>
    </RecoilRoot>
  )

}
