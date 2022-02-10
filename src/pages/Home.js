import vintedlogo from "../img/vinted-logo.svg";
import hpbanner from "../img/hp-banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="top-bar">
          <div className="logo">
            <img src={vintedlogo} alt="Vinted Logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Rechercher des articles" />
          </div>
          <div className="actions">
            <button className="secondary-button">
              S'inscrire / Se connecter
            </button>
            <button className="primary-button">Vends tes articles</button>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-background">
          <img src={hpbanner} alt="Women smiling" />
          <div className="hero-divider"></div>
        </div>
      </div>
      <div className="offer">
        <Offer />
      </div>
    </div>
  );
};

export default Home;
