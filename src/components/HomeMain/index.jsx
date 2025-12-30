import React from 'react';
import { HomeBox, HomePage, HomePageSlide } from './HomeMain.styled';
import CatalogHome from "../../components/CatalogHome";

import hero from "../../assets/hero.png";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

function HomeMain(props) {
    return (
        <HomeBox>
            <HomePage>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <HomePageSlide>
                            <div className="Home_img_2">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                            <div className="Home_div">
                                <p className="home_text">Скидка 15% <br />
                                    на все подвесные <br />
                                    светильники</p>
                                <p className="home_color">до 5 февраля</p>
                            </div>
                            <div className="Home_img">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                        </HomePageSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HomePageSlide>
                            <div className="Home_img_2">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                            <div className="Home_div">
                                <p className="home_text">Скидка 15% <br />
                                    на все подвесные <br />
                                    светильники</p>
                                <p className="home_color">до 5 февраля</p>
                            </div>
                            <div className="Home_img">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                        </HomePageSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HomePageSlide>
                            <div className="Home_img_2">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                            <div className="Home_div">
                                <p className="home_text">Скидка 15% <br />
                                    на все подвесные <br />
                                    светильники</p>
                                <p className="home_color">до 5 февраля</p>
                            </div>
                            <div className="Home_img">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                        </HomePageSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HomePageSlide>
                            <div className="Home_img_2">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                            <div className="Home_div">
                                <p className="home_text">Скидка 15% <br />
                                    на все подвесные <br />
                                    светильники</p>
                                <p className="home_color">до 5 февраля</p>
                            </div>
                            <div className="Home_img">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                        </HomePageSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HomePageSlide>
                            <div className="Home_img_2">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                            <div className="Home_div">
                                <p className="home_text">Скидка 15% <br />
                                    на все подвесные <br />
                                    светильники</p>
                                <p className="home_color">до 5 февраля</p>
                            </div>
                            <div className="Home_img">
                                <img src={hero} alt="Hero lamp" />
                            </div>
                        </HomePageSlide>
                    </SwiperSlide>
                </Swiper>
            </HomePage>
        </HomeBox>
    );
}

export default HomeMain;