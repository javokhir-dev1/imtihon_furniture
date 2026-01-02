import React from "react";
import { BrandCard, BrandCardMobile, BrandsSection } from "./Brands.styled";

import brand1 from "../../assets/brands/brand1.svg";
import brand2 from "../../assets/brands/brand2.svg";
import brand3 from "../../assets/brands/brand3.svg";
import { Left, Right } from "../icons";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function Brands(props) {
  return (
    <div className="container">
      <BrandsSection>
        <div className="brands-header">
          <h2>Только проверенные бренды</h2>
          <div className="arrows">
            <button>
              <Left />
            </button>
            <button>
              <Right />
            </button>
          </div>
        </div>
        <div className="brands-grid-desktop">
          {[brand1, brand2, brand3, brand1].map((b, i) => (
            <BrandCard key={i}>
              <img src={b} alt="brand" />
            </BrandCard>
          ))}
        </div>

        <div className="brands-grid-mobile">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[brand1, brand2, brand3, brand1].map((b, i) => (
              <SwiperSlide>
                <BrandCardMobile key={i}>
                  <img src={b} alt="brand" />
                </BrandCardMobile>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BrandsSection>
    </div>
  );
}

export default Brands;