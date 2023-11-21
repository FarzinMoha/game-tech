import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
const persianFont = localFont({
  src: [
    {
      path: '../font/Yekan.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <main className={persianFont.className}>
    <Navbar/>
    <Component {...pageProps}  />
    </main>
  )
}
