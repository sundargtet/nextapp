import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'

import LoggedInLayout from '@/layouts/logged-in'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <LoggedInLayout>
          <Component {...pageProps} />
        </LoggedInLayout>
      </ChakraProvider>
    </RecoilRoot>
  )

}
