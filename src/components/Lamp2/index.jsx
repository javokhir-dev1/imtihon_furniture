import React, { useEffect, useState } from 'react';
import { ProductCard, ProductsGrid, ProductsHeader } from './Lamp.styled';
import { HeartIcon, Karzinka, UpArr } from '../icons';
import product from "../../assets/product.png";
import { BackgroundColors } from '../../theme';

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useLocation } from "react-router-dom";


function Lamp2(props) {

  const products = [
    {
      id: 1,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product,
    },
    {
      id: 2,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product,
    },
    {
      id: 3,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product,
    },
    {
      id: 4,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product,
    },
  ];

  const [isNotVisible, setIsNotVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/all-products") {
      setIsNotVisible(true);
    } else {
      setIsNotVisible(false);
    }
  }, [location.pathname]);


  const { goToAllProducts, goToDetail } = useAppNavigation()
  return (
    <div className="container">
      <div>
        <ProductsHeader>
          <h3>
            Популярные товары
          </h3>

        </ProductsHeader>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} onClick={goToDetail}>
              <div className="product-heart">
                <HeartIcon />
              </div>
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>

              <p>{product.name}</p>
              <span className="category">7 000₽</span>

              <div className="product-bottom">
                <span className="price">{product.price}</span>
                <button className="cart-btn">
                  <Karzinka/>
                </button>
              </div>
            </ProductCard>
          ))}
          <div
            className="goToAllProducts"
            style={{ cursor: "pointer" }}
          >
            <button onClick={goToAllProducts}>Все товары <UpArr className="catalog_btn" /></button>
          </div>

        </ProductsGrid>
        
      </div>
    </div>
  );
}

export default Lamp2;