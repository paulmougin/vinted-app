import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <div className="loader">
      <p>Chargement de l'annonce...</p>
    </div>
  ) : (
    <div className="offer">
      <div className="offer-col1">
        <p>Add an image here</p>
      </div>
      <div className="offer-col2">
        <div className="offer-card">
          {/* Details du produit */}
          {data.product_details.map((detail, index) => {
            const keys = Object.keys(detail);
            return (
              <p key={index}>
                {keys[0]} {detail[keys[0]]}
              </p>
            );
          })}
          {/* Nom du produit */}
          <p>{data.product_name}</p>

          {/* Etat du produit */}
          {data.product_details.map((detail, index) => {
            return <p>{detail.ÉTAT}</p>;
          })}
          {/* Author de la publication + Avatar*/}
        </div>
      </div>
    </div>
  );
};

export default Offer;
