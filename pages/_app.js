import Head from 'next/head';
import { ContextProvider } from '../Components/ContextStore/Context';
import Layout from '../Components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (

    <ContextProvider>
   <Layout>
       <Head>
         <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
       </Head>
 <Component {...pageProps} />
    </Layout>
  
    </ContextProvider>
    
     
   
 
  )
}

export default MyApp
