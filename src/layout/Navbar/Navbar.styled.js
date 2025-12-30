import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    padding: 12px;
    margin-bottom: 68px;

    .mobile-content {
        display: none;
    }

    @media screen and (max-width: 900px) {
        .mobile-content {
            display: block;
        }

        .desktop-content {
            display: none;
        }
    }

    .mobile-opening-content {
        display: none;
    }

    .mobile-opening-content.visible {
        display: block;
    }
`;


export const MobileContent = styled.div`
    & button {
        background-color: inherit;
        border: 0;
    }

    .nav_box {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    & .icon_box {
        display: flex;
        align-items: center;
        gap: 15px;
    }
`

export const Mobile_opening_content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 5;

    & div {
        background-color: white;
    }
`

export const Mobile_nav_box = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-between;
`

export const Mobile_box = styled.div`
    padding: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`

export const Mobile_nav_items = styled.div`
    & div {
        text-align: center;
        padding: 15px 0;
        border-top: 1px solid rgba(0,0,0,0.1);
        border-collapse: collapse;
    }
    
    & div:last-child {
        border-bottom: 1px solid rgba(0,0,0,0.1);  
    }

    & div a {
        color: rgba(69, 69, 69, 0.5);
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
    }   
`

export const Mobile_nav_bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    flex-direction: column;
    margin-top: 30px;

    padding-bottom: 50px;
    & .catalog-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 50px;
        padding: 10px 28px;
        border-radius: 100px;
        border: none;
        background-color: #454545;
        color: white;
        font-size: 16px;
        font-weight: 600;
        width: 90%;
        margin-bottom: 20px;
      }

      & p:last-child {
        color: rgba(69, 69, 69, 0.5);
        font-weight: 600;
      }

    
    
`