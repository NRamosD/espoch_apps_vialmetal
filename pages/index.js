import Head from 'next/head'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Home() {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Nav />
         <main>
            <h1>VIALMETAL</h1>
            <p>This is an example project </p>
            <p>PANTALLA INICIAL </p>
         </main>
         <Footer />
      </>
   )
}
