import "../styles/index.css";
import Layout from "../shared/Components/Layout";
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.cjs'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default appWithTranslation(MyApp, nextI18NextConfig)