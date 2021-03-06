import Contact from "@/components/Contact";
import Head from "next/head";
import 'remixicon/fonts/remixicon.css'
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";
import Solutions from "@/components/Solutions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nac Bilişim Teknoloji</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
        
        <Contact/>
        <AboutUs/>
        <Solutions/>
        <CallToAction/>
        
      
   
      
    </>
  );
}
