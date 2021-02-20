import Head from 'next/head'
import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-domain="tidbit.dev"
          src="https://plausible.io/js/plausible.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
