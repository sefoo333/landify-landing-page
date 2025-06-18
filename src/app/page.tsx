import Achivments from "@/componants/Achivments";
import Apps_section from "@/componants/Apps_section";
import CFA from "@/componants/CFA";
import Features_section from "@/componants/Features_section";
import Footer from "@/componants/Footer";
import Hero from "@/componants/Hero";
import Partners from "@/componants/partners";
import Stories_section from "@/componants/Stories_section";

export default function Home() {
  return (
    <> 
    <Hero />
             <Partners />
 <Features_section />
           <Stories_section />
           <Achivments />
            <Apps_section />
            <CFA />
            <Footer />
  </>
  );
}
