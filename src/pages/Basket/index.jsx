import React, { useState } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";
import { CartStyled } from "./Basket.styled";
import Trash from "../../components/icons/Trash.icon";
import product from "../../assets/product.png";

// Helper for spaces in prices (e.g., "12 800")
const formatNumber = (num) => {
  return new Intl.NumberFormat("ru-RU").format(num);
};

function Basket() {
  const { goToHome, goToCatalog } = useAppNavigation();

  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Встраиваемый светильник Novotech",
      desc: "Светильник RADUGA COMBO XS \n Промышленное Освещение: \n 50Вт; 230В; S4; XS;",
      article: "RAD-COMBO-50/XXX/230/XXX/ \n XXX/S4/XS",
      price: 6399,
      image: product,
      quantity: 1,
    },
    {
      id: 2,
      name: "Встраиваемый светильник Novotech",
      desc: "Светильник RADUGA COMBO XS \n Промышленное Освещение: \n 50Вт; 230В; S4; XS;",
      article: "RAD-COMBO-50/XXX/230/XXX/ \n XXX/S4/XS",
      price: 6399,
      image: product,
      quantity: 1,
    },
  ]);

  // Handlers
  const increaseQty = (id) => {
    setCartItems(curr => curr.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(curr => curr.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(curr => curr.filter(item => item.id !== id));
  };

  // Totals
  const productsTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCost = 580;
  const grandTotal = productsTotal + deliveryCost;

  return (
    <CartStyled className="container">
      {/* Breadcrumbs */}
      <div className="navigate">
        <p onClick={goToHome}>Главная</p>
        <RightArr />
        <p onClick={goToCatalog}>Каталог</p>
        <RightArr />
        <p className="active">Корзина</p>
      </div>

      <h1>Корзина</h1>

      {/* --- ITEMS SECTION --- */}
      <div className="section-box">
        <div className="cart-header">
          <div>Фото</div>
          <div>Товары</div>
          <div>Описание</div>
          <div>Артикул</div>
          <div>Количество</div>
        </div>

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="img-box">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="info">
              <h4>{item.name}</h4>
              <b>{formatNumber(item.price)} ₽</b>
            </div>

            <div className="desc">
              {item.desc}
            </div>

            <div className="article">
              {item.article}
            </div>

            <div className="actions">
              <div className="counter">
                <button onClick={() => decreaseQty(item.id)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <div className="delete-btn" onClick={() => removeItem(item.id)}>
                <Trash />
              </div>
            </div>
          </div>
        ))}

        {cartItems.length === 0 && <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>Корзина пуста</div>}
      </div>

      {/* --- FORM SECTION 1: DETAILS --- */}
      <div className="section-box">
        <h2 className="section-title">Оформление</h2>
        <div className="form-grid">
          <input type="text" placeholder="ФИО" />
          <input type="tel" placeholder="Телефон" />
          <input type="email" placeholder="Электронная Почта" />
        </div>
      </div>

      {/* --- FORM SECTION 2: DELIVERY --- */}
      <div className="section-box">
        <h2 className="section-title">Доставка</h2>
        <div className="full-width-inputs">
          <input type="text" placeholder="Адрес доставки" />
          <textarea placeholder="Комментарий"></textarea>
        </div>
      </div>

      {/* --- PAYMENT SECTION --- */}
      <div className="section-box">
        <h2 className="section-title">Оплата</h2>

        <div className="payment-area">
          <div className="summary-lines">
            <div className="line">
              <span className="label">Товары</span>
              <span className="dots"></span>
              <span className="value">{formatNumber(productsTotal)} ₽</span>
            </div>
            <div className="line">
              <span className="label">Доставка</span>
              <span className="dots"></span>
              <span className="value">{deliveryCost} ₽</span>
            </div>
          </div>

          <div className="total-block">
            <h3 className="total-price">{formatNumber(grandTotal)} ₽</h3>

            <div className="buy-actions">
              <button className="buy-btn">Купить</button>
              <div className="terms">
                <input type="checkbox" id="terms_check" />
                <label htmlFor="terms_check">Я согласен на обработку моих персональных данных</label>
              </div>
            </div>
          </div>
        </div>
      </div>

    </CartStyled>
  );
}

export default Basket;