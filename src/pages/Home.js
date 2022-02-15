import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import hpbanner from "../img/hp-banner.jpg";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loader">
      <p>Chargement des annonces...</p>
    </div>
  ) : (
    <div>
      <div className="hero">
        <div className="hero-background">
          <img src={hpbanner} alt="Women smiling" />
          <div className="hero-divider"></div>
        </div>
      </div>
      <div className="container">
        <div className="offer-grid">
          {data.offers.map((offer, index) => {
            return (
              <div className="offer-grid-card">
                <Link to={`/offer/${offer._id}`} key={offer._id}>
                  <div>{offer.product_name}</div>
                  <img src={offer.product_image.url} alt="" />
                  <div>{offer.product_price}€</div>
                  <div>
                    {offer.product_details.map((details, index) => {
                      return <p>{details.MARQUE}</p>;
                    })}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
