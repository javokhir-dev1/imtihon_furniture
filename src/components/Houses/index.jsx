import React from "react";
import { HouseHeader, HouseMobile, Houses1 } from "./Houses.styled";
import { UpArr } from "../icons";
import { WhySection } from "../NornLight/NornLight.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import house1 from "../../assets/houses/house1.png";
import house2 from "../../assets/houses/house2.png";
import house3 from "../../assets/houses/house3.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function Houses({ showHeader = true }) {
  const { goToBlog } = useAppNavigation();

  return (
    <div className="container">
      <HouseHeader>
        <h3>
          Блог
        </h3>

        <button onClick={goToBlog}>
          Перейти в блог <UpArr />
        </button>
      </HouseHeader>
      <Houses1>
        <div className="wrapper">
          <img src={house1} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом <br /> снаружи?</p>
            <UpArr />
          </div>
          <span>01.01.2024</span>
        </div>

        <div className="wrapper">
          <img src={house2} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом <br /> снаружи?</p>
            <UpArr />
          </div>
          <span>01.01.2024</span>
        </div>

        <div className="wrapper">
          <img src={house3} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом <br /> снаружи?</p>
            <UpArr />
          </div>
          <span>01.01.2024</span>
        </div>
      </Houses1>
      <HouseMobile>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="wrapper">
              <img src={house3} alt="" />
              <div className="Catalog">
                <p>Как правильно освещать дом <br /> снаружи?</p>
                <UpArr />
              </div>
              <span>01.01.2024</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img src={house3} alt="" />
              <div className="Catalog">
                <p>Как правильно освещать дом <br /> снаружи?</p>
                <UpArr />
              </div>
              <span>01.01.2024</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrapper">
              <img src={house3} alt="" />
              <div className="Catalog">
                <p>Как правильно освещать дом <br /> снаружи?</p>
                <UpArr />
              </div>
              <span>01.01.2024</span>
            </div>
          </SwiperSlide>
        </Swiper>
        <button onClick={goToBlog}>
          Перейти в блог <UpArr />
        </button>
      </HouseMobile>
    </div>
  );
}

export default Houses;
