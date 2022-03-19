import "../styles/globals.css";
import { AuthProvider } from "./api/auth";


import ResponsiveAppBar from "../components/navbar/navbar"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
     
      <ResponsiveAppBar />
      <Component {...pageProps} />
      
    </AuthProvider>

   
  );
}

export default MyApp;
