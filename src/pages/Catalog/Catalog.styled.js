import styled from "styled-components";

export const CatalogWrapper = styled.div`
  .catalog_p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 52px;
    font-weight: 600;
    font-size: 16px;
    color: #454545;
    background-color: #f3f2f2ff;
    width: 1301px;
    height: 44px;
    border-radius: 50px;
    margin-top: -50px;

    & p:hover {
      color: #a7a1a1ff;
      cursor: pointer;
    }
  }

  

  .navigate {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 48px;

    & p:hover {
      color: #bbb8b8ff;
      cursor: pointer;
    }
  }

  .Catalog_h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 110%;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 60px;
    color: #454545;
  }

  @media (max-width: 768px) {
    .catalog_p {
      display: none;
    }

    .Catalog_h1 {
      font-size: 25px;
    }
  }
`;

export const CatalogGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 0;
`;



export const CatalogCard = styled.div`
  width: 32.2%; 
  background-color: #F2F2F2;
  position: relative; 
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 14px;
  height: 220px;


  &:nth-last-child(-n + 2){
    width: 49.3%;
  }
  .title {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  .imgBox {
    width: 200px;
    padding: 20px;
  }

  .imgBox img {
    width: 100%;
  }

  span {
    position: absolute;
    bottom: 25px;
    left: 25px;
  }

  @media (max-width: 768px) {
    width: 49%;
    justify-content: center;
    .imgBox {
      width: 150px;
    }
    &:last-child {
      width: 100%;
      .imgBox {
        width: 200px;
      }
    }
  }
`