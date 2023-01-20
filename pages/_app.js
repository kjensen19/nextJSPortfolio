import '../styles/globals.css'
import { Inter } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';

//Set global values for font etc
//Initialize Animation for motion
//Enable Vercel Analytics
//Activate Next Router
function MyApp({ Component, pageProps, router }) {
  return(    <>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
    <Analytics />
  </>)
}

export default MyApp
