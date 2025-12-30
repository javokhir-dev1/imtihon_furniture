import React, { useRef, useState } from 'react';
import NavbarTop from './components/NavbarTop';
import NavbarMain from './components/NavbarMain';

import { MobileContent, NavbarWrapper, Mobile_nav_items, Mobile_box, Mobile_nav_box, Mobile_opening_content, Mobile_nav_bottom } from './Navbar.styled';
import NavbarMobileIcon from '../../components/icons/Navbar.mobile.icon';
import { CartIcon, CatalogIcon, HeartIcon, NetworkIcon, SearchIcon } from '../../components';
import SvgComponent from '../../components/icons/Karzinka.icon';
import { Link, NavLink } from 'react-router-dom';
import { SearchWrapper } from './components/NavbarMain/NavbarMain.styled';
import CloseIcon from '../../components/icons/Close.icon';
import Trash from '../../components/icons/Trash.icon';
import Korzinka from '../../components/icons/Karzinka.icon';

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarWrapper>
            <div className='container desktop-content'>
                <NavbarTop />
                <NavbarMain />
            </div>

            <MobileContent className='container mobile-content'>

                <Mobile_nav_box>
                    <div className="nav_box">
                        <button onClick={handleOpen}>
                            <NavbarMobileIcon />
                        </button>
                        <NavLink to="/">
                            <img src="/logo.svg" width="170px" alt="Logo" />
                        </NavLink>
                    </div>
                    <div className='icon_box'>
                        <HeartIcon />
                        <NavLink
                            to="/basket"
                            className="item"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <CartIcon />
                        </NavLink>
                    </div>
                </Mobile_nav_box>

                <SearchWrapper>
                    <div className="input-wrapper" style={{ marginTop: "20px" }}>
                        <input type="text" placeholder="Поиск по товарам" />
                        <span className="search-icon-wrap">
                            <SearchIcon />
                        </span>
                    </div>
                </SearchWrapper>
                <Mobile_opening_content style={{ display: !isOpen ? "none" : "block" }}>
                    <div>
                        <Mobile_box>
                            <button onClick={handleOpen}>
                                <CloseIcon />
                            </button>
                            <div>
                                <HeartIcon />
                                <NetworkIcon />
                                <NavLink
                                    to="/basket"
                                    className="item"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <CartIcon />
                                </NavLink>
                            </div>
                        </Mobile_box>
                        <Mobile_nav_items>
                            <div>
                                <Link to="/about">О компании</Link>
                            </div>
                            <div>
                                <Link to="/delivery-payment">Доставка и оплата </Link>
                            </div>
                            <div>
                                <Link to="/return">Возврат</Link>
                            </div>
                            <div>
                                <Link to="/garants">Гарантии</Link>
                            </div>
                            <div>
                                <Link to="/contacts">Контакты</Link>
                            </div>
                            <div>
                                <Link to="/blog">Блог</Link>
                            </div>
                        </Mobile_nav_items>
                        <Mobile_nav_bottom>
                            <button className="catalog-button">
                                <CatalogIcon />
                                <span>Каталог</span>
                            </button>
                            <p>8 (800) 890-46-56</p>
                            <p>Заказать звонок</p>
                        </Mobile_nav_bottom>
                    </div>
                </Mobile_opening_content>
            </MobileContent>
        </NavbarWrapper>
    );
}

export default Navbar;