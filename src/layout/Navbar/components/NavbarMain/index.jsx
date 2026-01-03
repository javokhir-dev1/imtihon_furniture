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
import { useAppNavigation } from '../../../../hooks/useAppNavigation';

function NavbarMain(props) {
  const { goToCatalog, goToFavorite } = useAppNavigation()
  return (
    <NavMainWrapper>
      <NavLink to="/" className="nav_logo">
        <img src="/logo.svg" alt="Logo" />
      </NavLink>
      <SearchWrapper>
        <button style={{ cursor: "pointer" }} onClick={goToCatalog} className="catalog-button">
          <CatalogIcon />
          <span>Каталог</span>
        </button>
        <div className="input-wrapper">
          <input type="text" placeholder="Поиск по товарам" />
          <span className="search-icon-wrap">
            <SearchIcon />
          </span>
        </div>
      </SearchWrapper>
      <NavigationItems>
        <div onClick={goToFavorite} style={{ cursor: "pointer" }} className="item">
          <HeartIcon />
          <span>Избранное</span>
        </div>
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