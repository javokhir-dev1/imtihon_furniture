import React, { useState } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";
import { CartBottom, CartMain, CartMiddle, CartStyled, CartTop, CartTopMobile } from "./Basket.styled";
import Trash from "../../components/icons/Trash.icon";
import product from "../../assets/product.png";

function Basket() {
  const { goToHome, goToCatalog } = useAppNavigation();

  return (
    <CartStyled className="container">
      <div className="navigate" style={{ margin: "0 auto", maxWidth: "1300px", width: "100%" }}>
        <p onClick={goToHome}>Главная</p>
        <RightArr />
        <p onClick={goToCatalog}>Каталог</p>
        <RightArr />
        <p>Корзина</p>
      </div>
      <h1>Корзина</h1>
      <CartMain>
        <CartTop>
          <div className="cart_row_1">
            <p>Фото</p>
            <p>Товары</p>
            <p>Описание</p>
            <p>Артикул</p>
            <p>Количество</p>
          </div>
          <div className="cart_row_2">
            <div className="imgBox">
              <img src={product} alt="" />
            </div>
            <div>
              <p>
                Встраиваемый светильник Novotech
              </p>
              <p>6 399₽</p>
            </div>
            <p className="p_1">Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>

            <p className="p_2">RAD-COMBO-50/XXX/230/XXX/XXX/ S4/XS</p>

            <div className="btnBox">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <p className="fa-solid fa-trash cart_trash"></p>
          </div>

          <div className="cart_row_2">
            <div className="imgBox">
              <img src={product} alt="" />
            </div>
            <div>
              <p>
                Встраиваемый светильник Novotech
              </p>
              <p>6 399₽</p>
            </div>
            <p className="p_1">Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>

            <p className="p_2">RAD-COMBO-50/XXX/230/XXX/XXX/ S4/XS</p>

            <div className="btnBox">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <p className="fa-solid fa-trash cart_trash"></p>
          </div>
        </CartTop>

        <CartTopMobile>
          <div className="cart_row">
            <div className="imgBox">
              <img src={product} alt="" />
            </div>
            <div className="infoBox">
              <p>
                  Встраиваемый светильник Novotech
              </p>
              <p className="cart_mobile_price">6 399₽</p>
              <p className="p_1">Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>

              <p className="p_2">RAD-COMBO-50/XXX/230/XXX/XXX/ S4/XS</p>

              <div className="mobile_cart_bottom">
                <div className="btnBox">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <p className="fa-solid fa-trash cart_trash"></p>
              </div>
            </div>
          </div>

          <div className="cart_row">
            <div className="imgBox">
              <img src={product} alt="" />
            </div>
            <div className="infoBox">
              <p>
                Встраиваемый светильник Novotech
              </p>
              <p className="cart_mobile_price">6 399₽</p>
              <p className="p_1">Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>

              <p className="p_2">RAD-COMBO-50/XXX/230/XXX/XXX/ S4/XS</p>

              <div className="mobile_cart_bottom">
                <div className="btnBox">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <p className="fa-solid fa-trash cart_trash"></p>
              </div>
            </div>
          </div>
        </CartTopMobile>

        <CartMiddle>
          <h2>Оформление</h2>
          <div className="form_1">
            <input type="text" placeholder="ФИО" />
            <input type="text" placeholder="телефон" />
            <input type="text" placeholder="Электронная почта" />
          </div>

          <h2>Доставка</h2>
          <div className="form_2">
            <div className="checkbox_box">
              <div>
                <input type="radio" name="bla" />
                <p>Доставка</p>
              </div>

              <div>
                <input type="radio" name="bla" />
                <p>Самовывоз</p>
              </div>
            </div>
            <input type="text" placeholder="Адрес доставки" /><br />
            <textarea placeholder="Комментарий"></textarea>
          </div>
        </CartMiddle>

        <CartBottom>
          <h2>Оплата</h2>
          <div className="cart_bottom_text">
            <p>Товары.............................................12 300₽</p>
            <p>Доставка..............................................580₽</p>
          </div>
          <div className="checkbox_box">
            <div>
              <input type="radio" name="bla" />
              <p>Доставка</p>
            </div>

            <div>
              <input type="radio" name="bla" />
              <p>Самовывоз</p>
            </div>
          </div>

          <p className="cart_bottom_price">12 800₽</p>

          <div className="buy_box">
            <button>Купить</button>
            <div className="input_box">
              <input type="checkbox" />
              <p>Я согласен наобработку моих персональных данных</p>
            </div>
          </div>
        </CartBottom>
      </CartMain>
    </CartStyled>
  );
}

export default Basket;