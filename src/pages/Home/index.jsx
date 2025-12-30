import React from "react";
import hero from "../../assets/hero.png";
import { HomePage, Home1, HomePageSlide } from "./Home.styled";

import Hauses1 from "../../components/Houses";

import Text from "../../components/Text";
import Lamp from "../../components/Lamp";
import NornLight from "../../components/NornLight";
import Brands from "../../components/Brands";
import CatalogHome from "../../components/CatalogHome";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import HomeMain from "../../components/HomeMain";

function Home() {
  return (
    <Home1>
      <div>
        <HomeMain/>

        <CatalogHome />

        <NornLight />

        <Lamp />

        <Brands />

        {/* <Hauses1 />

        <Text /> */}
      </div>
    </Home1>
  );
}

export default Home;
