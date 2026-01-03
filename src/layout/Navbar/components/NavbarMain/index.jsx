import React from 'react';
import {
  CartIcon,
  CatalogIcon,
  HeartIcon,
  NetworkIcon,
  SearchIcon
} from '../../../../components';

import { NavMainWrapper, SearchWrapper, NavigationItems } from './NavbarMain.styled';
import { Link, Navigate, NavLink } from 'react-router-dom';

function NavbarMain(props) {
  return (
    <NavMainWrapper>
      <NavLink to="/" className="nav_logo">
        <img src="/logo.svg" alt="Logo" />
      </NavLink>
      <SearchWrapper>
        <NavLink to="/catalog">
          <button className="catalog-button">
            <CatalogIcon />
            <span>Каталог</span>
          </button>
        </NavLink>
        <div className="input-wrapper">
          <input type="text" placeholder="Поиск по товарам" />
          <span className="search-icon-wrap">
            <SearchIcon />
          </span>
        </div>
      </SearchWrapper>
      <NavigationItems>
        <NavLink to="/favorite" className="item" style={{ textDecoration: "none", color: "#454545" }}>
          <HeartIcon />
          <span>Избранное</span>
        </NavLink>
        <div className="item">
          <NetworkIcon />
          <span>Сравнение</span>
        </div>
        <div
          className="item"
        >
          <NavLink
            to="/basket"
            className="item"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <CartIcon />
            <span>Корзина</span>
          </NavLink>
        </div>
      </NavigationItems>
    </NavMainWrapper >
  );
}

export default NavbarMain;