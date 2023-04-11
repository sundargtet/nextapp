import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import LoggedInLayout from '@/layouts/logged-in'
import LogInLayout from '@/layouts/log-in'
import Login from './login'
import Loading from '@/share/organisms/loading'
import { useAuth } from '@/hooks'
import '@/styles/globals.css'
import { publicRoutes } from '@/utils/routes'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isAuth = useAuth()
  const getComponents = () => {
    if (publicRoutes.includes(router.pathname)) {
      return <Component {...pageProps} />
    } else {
      return <Login {...pageProps} />
    }
  }
  return (
    <RecoilRoot>
      <ChakraProvider>
        {
          isAuth === undefined ? <Loading /> :
            isAuth === null ?
              <LogInLayout>
                {
                  getComponents()
                }
              </LogInLayout> :
              <LoggedInLayout>
                <Component {...pageProps} />
              </LoggedInLayout>
        }
      </ChakraProvider>
    </RecoilRoot>
  )

}
