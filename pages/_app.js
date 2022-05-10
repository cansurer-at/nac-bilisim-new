import Layout from 'layout/Layout'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'


function MyApp({ Component, pageProps }) {
  return (
  <div>
  <Layout>
  <Component {...pageProps}/>
  </Layout>
  </div>

  )
}

export default MyApp
