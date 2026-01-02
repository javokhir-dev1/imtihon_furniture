import React from 'react';

import { useAppNavigation } from '../../hooks/useAppNavigation';
import { RightArr } from '../../components';
import { Return, ReturnMain } from './Garants.styled';


function ReturnPage(props) {
  const {goToHome} = useAppNavigation()
    return (
      <Return className="container">
        <div className='navigate'>
          <p onClick={goToHome}>Главная</p>
          <RightArr />
          <p>Гарантии</p>
        </div>
        <ReturnMain>
          <div className="col1">
            <h1>Гарантии</h1>
          </div>
          <div className="col2">
            <p className='bold'>Обмен и возврат по желанию покупателя</p>
            <p className='simple'>Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
              Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:</p>
            <ul>
              <li>Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа</li>
              <li>Привезти товар к нам на склад или отправить его транспортной компанией.</li>
              <li>После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку</li>
            </ul>
            <p className='simple'>Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.</p>
            <p>Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.</p>

           
          </div>
        </ReturnMain>
      </Return>
    );
}

export default ReturnPage;