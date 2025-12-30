import React, { useEffect, useState } from "react";
import { CatalogCard, CatalogGrid, Catalog, CatalogGridMobile, CatalogCardMobile } from "./CatalogHome.styled";
import { UpArr } from "../icons";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import catalog1 from "../../assets/lusters/catalog1.png";
import catalog2 from "../../assets/lusters/catalog2.png";
import catalog3 from "../../assets/lusters/catalog3.png";
import catalog4 from "../../assets/lusters/catalog4.png";
import catalog5 from "../../assets/lusters/catalog5.png";
import catalog6 from "../../assets/lusters/catalog6.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function CatalogHome(props) {
  const { goToCatalog } = useAppNavigation();

  const catalogs = [catalog1, catalog2, catalog3, catalog4, catalog5, catalog6]

  return (
    <div className="container">
      <Catalog>
        <h1>Каталог</h1>
        <div
          className="gotoCatalog"
          style={{ cursor: "pointer" }}
        >
          <button onClick={goToCatalog}>Весь каталог <UpArr className="catalog_btn" /></button>
        </div>
      </Catalog>

      <CatalogGrid>
        {catalogs.map((img, index) => (
          <CatalogCard key={index}>
            <p className="title">
              {
                [
                  "Люстры",
                  "Светильники",
                  "Бра",
                  "Торшеры",
                  "Настольные лампы",
                  "Споты",
                ][index]
              }
            </p>
            <img src={img} alt="Catalog item" />
            <span>От 540₽ →</span>
          </CatalogCard>
        ))}
      </CatalogGrid>

      <CatalogGridMobile>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {catalogs.map((img, index) => (
            <SwiperSlide key = { index }>
              <CatalogCardMobile>
                <p className="title">
                  {
                    [
                      "Люстры",
                      "Светильники",
                      "Бра",
                      "Торшеры",
                      "Настольные лампы",
                      "Споты",
                    ][index]
                  }
                </p>
                <img src={img} alt="Catalog item" />
                <span>От 540₽ →</span>
              </CatalogCardMobile>
            </SwiperSlide>
          ))}
        <button onClick={goToCatalog}>Весь каталог <UpArr className="catalog_btn" /></button>
        </Swiper>
      </CatalogGridMobile>
    </div>
  );
}

export default CatalogHome;
