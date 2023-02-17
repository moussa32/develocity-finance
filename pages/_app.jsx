import "../styles/index.css";
import Layout from "../shared/Components/Layout";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
