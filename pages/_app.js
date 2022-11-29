import '../styles/globals.css'
import { Inter } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps, router }) {
  return(    <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
    <Analytics />
  </>)
}

export default MyApp
