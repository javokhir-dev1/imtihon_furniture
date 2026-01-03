import styled from "styled-components";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export const Catalog = styled.div`
  display: flex;
  justify-content: space-between;
  color: #454545;
  margin-bottom: 40px;

  button {
    background-color: white;
    padding: 15px 40px;
    color: #454545;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #454545;
    font-size: 18px;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.1s;
  }

  button:hover {
    background-color: #454545;
    color: white;
  }

  button:hover .catalog_btn {
    color: white;
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;

export const CatalogGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CatalogCard = styled.div`
  width: 420px;
  height: 250px;
  padding: 30px;
  border-radius: 10px;
  font-weight: 500;
  background-color: #F2F2F2;
  color: #454545;
  position: relative;

  .title {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 20px;
    width: 20px;
  }

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }

  span {
    position: absolute;
    bottom: 25px;
    left: 25px;
    font-size: 14px;
  }
`;


export const  CatalogGridMobile = styled.div`
  .swiper-pagination-bullet-active {
    background-color: rgba(69, 69, 69, 0.7) !important;
  }

  @media (min-width: 769px) {
    display: none;
  }
  
  button {
    background-color: white;
    padding: 13px 30px;
    color: #454545;
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: center;
    gap: 8px;
    border: 1px solid #454545;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.1s;
    font-size: 20px;
    width: 100%;
    margin-bottom: 50px;
  }

  button:hover {
    background-color: #454545;
    color: white;
  }

  button:hover .catalog_btn {
    color: white;
  }
`

export const CatalogCardMobile = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  background-color: rgba(159, 159, 159, 0.1);
  border-radius: 25px;

  .title {
    position: absolute;
    top: 20px;
    font-weight: 600;
    font-size: 18px;
    color: #454545;
    left: 20px;
  }

  img {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  span {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #454545;

  }
`