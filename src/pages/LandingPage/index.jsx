import NonAuthNavbar from "../../Layout/NonAuthNav/NonAuthNavbar";
import AboutLanding from "../../components/LandinComp/About";
import Contact from "../../components/LandinComp/Contact";
import Download from "../../components/LandinComp/Download";
import Features from "../../components/LandinComp/Features";
import HeroSection from "../../components/LandinComp/HeroSection";
import Footer from "../../components/LandinComp/Footer";
import "./style.css"

const Landing = () => {
  return (
    <div className="landing-container">
      <NonAuthNavbar />
      <HeroSection />
      <div id="about">
     <AboutLanding/>
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contact/>
      </div>
        <Download/>
        <Footer/>
    </div>
  );
};

export default Landing;
