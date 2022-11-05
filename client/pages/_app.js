import '../styles/App.css'
import { SessionProvider } from "next-auth/react"
import { Header } from '../ClientComponents/Header';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header></Header>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
