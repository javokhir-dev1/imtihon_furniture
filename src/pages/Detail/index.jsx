import React, { useState } from 'react';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { RightArr } from '../../components';
import { DetailBottom, DetailPage, DetailTop, ImgCol, TextCol } from './Detail.styled';
import product from "../../assets/product2.png"

function Detail(props) {
    const { goToHome } = useAppNavigation()
    const [count, setCount] = useState(1)
    return (
        <div className='container'>
            <DetailPage>
                <div className="navigate" style={{ margin: "0 auto", maxWidth: "1300px", width: "100%" }}>
                    <p onClick={goToHome}>Главная</p>
                    <RightArr />
                </div>
                <DetailTop>
                    <ImgCol>
                        <img src={product} alt="" />
                    </ImgCol>
                    <TextCol>
                        <h2>Встраиваемый светильник Novotech</h2>
                        <div className="product_info_top">
                            <div>
                                <p>Scott</p>
                                <p>Артикул : 7655-188</p>
                                <p>В наличии</p>
                            </div>
                            <div>
                                <p>
                                    <i className="fab fa-odnoklassniki"></i>
                                </p>

                                <p>
                                    <i className="fab fa-vk"></i>
                                </p>

                                <p>
                                    <i className="fab fa-telegram-plane"></i>
                                </p>

                                <p>
                                    <i className="fab fa-whatsapp"></i>
                                </p>
                            </div>
                        </div>
                        <div className='product_price'>
                            <p>435 000 ₽</p>
                            <p>522 000 ₽</p>
                        </div>

                        <div className='product_info_bottom'>
                            <p>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри. </p>
                        </div>

                        <div className="product_bottom">
                            <div className="btn1">
                                <button onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1)
                                    }
                                }}>-</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(count + 1)}>+</button>
                            </div>
                            <button className='btn2'>В корзину</button>
                            <button className='btn3'>
                                <i className='far fa-heart'></i>
                            </button>
                        

                        </div>
                    </TextCol>
                </DetailTop>
                <h2 className='detail_bottom_title'>Характеристика</h2>
                <DetailBottom>
                    <div>
                        <p>Цвет</p>
                        <p>Жёлтый</p>
                    </div>

                    <div>
                        <p>Год</p>
                        <p>2016</p>
                    </div>

                    <div>
                        <p>Диаметр колеса</p>
                        <p>27.5 </p>
                    </div>

                    <div>
                        <p>Материал рамы</p>
                        <p>Карбон</p>
                    </div>

                    <div>
                        <p>Размер</p>
                        <p>L</p>
                    </div>

                    <div>
                        <p>Страна</p>
                        <p>Швейцария</p>
                    </div>

                    <div>
                        <p>Производитель</p>
                        <p>Scott</p>
                    </div>

                    <div>
                        <p>Покрышки</p>
                        <p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                    </div>

                    <div>
                        <p>Рама</p>
                        <p>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                    </div>

                    <div>
                        <p>Подседельный Штырь</p>
                        <p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                    </div>

                    <div>
                        <p>Седло</p>
                        <p>Ritchey WCS Streem V3 Titanium rails</p>
                    </div>

                    <div>
                        <p>Вилка</p>
                        <p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                    </div>
                </DetailBottom>
            </DetailPage>
        </div>
    );
}

export default Detail;