import styled from "styled-components";

export const ProductsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px 0;

  .goToAllProducts {
    width: 100%;
  }

  .goToAllProducts button {
    background-color: white;
    padding: 15px 40px;
    color: #454545;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid #454545;
    font-size: 18px;
    width: 100%;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.1s;
    display: flex;
    justify-content: center;
  }

  button:hover {
    background-color: #454545;
    color: white;
  }

  button:hover .norn-btn {
    color: white;
  }

  button.mobile_btn {
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 769px) {
    .goToAllProducts button {
      display: none;
    }
  }

`

export const ProductCard = styled.div`
  position: relative;
  width: 310px;
  padding: 20px;
  .product-heart {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .product-img {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 18px;
    color: #454545;
    margin-top: 20px;
    width: 200px;
  }

  span.category {
    color: rgba(69, 69, 69, 0.7);
    font-size: 14px;
    text-decoration: line-through;
  }
  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-weight: 600;
      color: #454545;
    }

    button {
      background-color: #454545;
      color: white !important;
      border: 0;
      padding: 2px 10px;
      border-radius: 100px;
    } 
    button svg {
      transform: scale(0.7);
    }
  }

  @media (max-width: 768px) {
    width: 48%;
    padding: 30px 20px;
    .product-img img {
      width: 100px;
    }

    .product-heart {
      display: none;
    }

    p {
      width: 30px;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;


export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;

  h3 {
    font-size: 2em;
    color: #454545;
  }
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

  button:hover .norn-btn {
    color: white;
  }

  button.mobile_btn {
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .goToAllProducts {
      display: none;
    }
  }
`