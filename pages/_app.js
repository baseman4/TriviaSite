import Layout from '../components/Layout';
import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'
import "/node_modules/rsuite/DateRangePicker/styles/index.less";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
