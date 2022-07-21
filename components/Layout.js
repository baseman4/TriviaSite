import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import Head from "next/head.js";
export default function Layout({children}){
    return (
        <>
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
            rel="stylesheet"
           />
        </Head>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </>
    );

}