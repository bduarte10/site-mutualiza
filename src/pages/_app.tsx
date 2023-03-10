import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import Layout from '@/Layout'

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
