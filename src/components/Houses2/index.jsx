import React from "react";
import { HouseHeader, HouseMobile, Houses1 } from "./Houses2.styled";
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

function Houses2({ showHeader = true }) {
  const { goToBlog } = useAppNavigation();

  return (
    <div className="container">
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
    </div>
  );
}

export default Houses2;
