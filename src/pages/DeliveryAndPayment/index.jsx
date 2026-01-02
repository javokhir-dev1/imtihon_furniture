import React from 'react';
import { Delivery, DeliveryMain } from './DeliveryAndPayment.styled';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { RightArr } from '../../components';
import mapphoto from "../../assets/map.png"

function DeliveryAndPayment(props) {

  const { goToHome } = useAppNavigation()
  return (
    <Delivery>
      <div className="container">
        <div className="navigate" style={{ margin: "0 auto", maxWidth: "1300px", width: "100%" }}>
          <p onClick={goToHome}>Главная</p>
          <RightArr />
          <p>Доставка и оплата</p>
        </div>
        <DeliveryMain>
          <div className="col1">
            <h1>Доставка и оплата</h1>
          </div>
          <div className="col2">
            <div>
              <h4>Доставка</h4>
              <p>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
            </div>

            <div>
              <h4>Курьерская доставка</h4>
              <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
            </div>

            <div>
              <h4>Самовывоз</h4>
              <p>Любой заказ можно забрать самостоятельно по адресу:г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
          </div>
        </DeliveryMain>
      </div>
      <div className="img_box">
        <img src={mapphoto} alt="" />
      </div>
    </Delivery>
  );
}

export default DeliveryAndPayment;