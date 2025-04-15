import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Explore from '@/components/Explore'
import OrderPage from "@/components/OrderPage";
import BestSeller from "@/components/BestSeller";
import App from "@/components/App";
import Footer from "@/components/Footer";
function page() {
    return <div className="bg-[#EEEFF1]">
    
      <Navbar />
      <Hero/>
      <Explore/>
      <OrderPage/>
      <BestSeller/>
      <App/>
      <Footer/>
    </div>;
}

export default page;
