import "./Home.css";
import Hero from "../../../assets/images/heroImg.png";
import FlashSales from "../../components/flashSales/FlashSales";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-inner">
            <div className="hero-img1">
              <img src={Hero} alt="hero" />
            </div>
            <div className="hero-img2"></div>
            <div className="hero-img3"></div>
          </div>
        </div>
      </div>
      <FlashSales />
      <Footer />
    </>
  );
};

export default Home;