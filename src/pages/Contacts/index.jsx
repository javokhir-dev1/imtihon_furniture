import React from 'react';
import { Contact, ContactBottom, ContactMain, ContactTop } from './Contacts.styled';
import { RightArr } from '../../components';
import { useAppNavigation } from '../../hooks/useAppNavigation';

import mapphoto from "../../assets/map.png"

function Contacts(props) {
  const { goToHome } = useAppNavigation()
  return (
    <Contact>
      <div className="container">
        <div className='navigate'>
          <p onClick={goToHome}>Главная</p>
          <RightArr />
          <p>Контакты</p>
        </div>
      </div>
      <ContactMain>
        <div className="container">
          <ContactTop>
            <div className="col">
              <h1>Контакты</h1>
            </div>
            <div className="col">
              <p>8 (800) 890-46-56</p>
              <p>Пн-Пт: 10:00 до 19:00 <br /> Сб-Вс: заказ через корзину <br />
                Телефоны: </p>
            </div>
          </ContactTop>
        </div>

        <ContactBottom>
          <div className="imgBox">
            <img src={mapphoto} alt="" />
            <div className='ContactBox'>
              <div>
                <p>Адрес магазина</p>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
              </div>
              <div>
                <p>Почта</p>
                <p>NORNLIGHT@mail.ru</p>
              </div>

              <div>
                <p>Телефон</p>
                <p>8 (800) 890-46-56</p>
              </div>

              <button>Оставить заявку</button>
            </div>
          </div>
        </ContactBottom>
      </ContactMain>
    </Contact>
  );
}

export default Contacts;