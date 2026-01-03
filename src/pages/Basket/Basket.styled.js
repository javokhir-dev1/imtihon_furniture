import styled from "styled-components";

export const CartStyled = styled.div`
  .navigate {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: rgba(69, 69, 69, 0.5)
    }

    p:last-child {
      color: #454545;
    }
  }

  h1 {
    font-size: 50px;
    font-weight: 600;
    color: #454545;
    margin: 30px 0;
  }

`

export const CartMain = styled.div`
  
`

export const CartTop = styled.div`
  background-color: #F2F2F2;
  padding: 35px;
  border-radius: 14px;
  .cart_row_1 {
    display: flex;
    padding-bottom: 20px;
    p:first-child {
      width: 130px;
    }

    p:nth-child(2) {
      width: 250px;
    }
    p:nth-child(3) {
      width: 350px;
    }
    p:nth-child(4) {
      width: 330px;
    }
  }

  .cart_row_2 {
    display: flex;
    padding-top: 30px;
    padding-bottom: 20px;
    border-top: 1px solid rgba(69, 69, 69, 0.3);
    justify-content: space-between;
    gap: 10px;
    .imgBox {
      width: 80px;
      height: 80px;
      padding: 5px;
      img {
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 200px;

      p:first-child {
        font-weight: 600;
        color: #454545;
      }
      p:last-child {
        font-weight: 700;
        color: #454545;
      }
    }
    .p_1 {
      width: 300px;
      font-size: 16px;
      color: #454545;
    }
    .p_2 {
      width: 280px;
    }
    .btnBox {
      display: flex;
      align-items: center;
      gap: 15px;
      color: #454545;
      
      p {
        border: 1px solid rgba(69, 69, 69, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
      }

      button {
        background-color: inherit;
        border: 0;
        font-weight: 500;
      }

    }
    .cart_trash {
      display: flex;
      align-items: center;
      padding-right: 10px;
      font-size: 20px;
    }
    
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const CartTopMobile = styled.div`
  .cart_row {
    display: flex;
    background-color: #f2f2f2;
    padding: 15px;
    border-radius: 14px;
    margin: 10px 0;
  }

  .infoBox {
    .mobile_cart_bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 20px;
    }
    .btnBox {
      margin-top: 20px;
      display: flex;
      align-items: center;
      gap: 15px;
      color: #454545;
      
      p {
        border: 1px solid rgba(69, 69, 69, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
      }

      button {
        background-color: inherit;
        border: 0;
        font-weight: 500;
      }

    }
      p {
        color: #454545;
      }
      p:first-child {
        font-size: 18px;
        font-weight: 600;
      }

      .cart_mobile_price {
        font-size: 23px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .p_2 {
        margin-top: 10px;
      }
    }

  .imgBox {
    width: 25%;
    margin-right: 20px;
    
    img {
      width: 100%;
      height: 60px;
      padding: 5px;
      background-color: white;
      border-radius: 10px;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }  
`

export const CartMiddle = styled.div`
  background-color: #F2F2F2;
  padding: 35px;
  border-radius: 14px;
  margin: 10px 0;
  h2 {
    font-size: 30px;
    color: #454545;
    font-weight: 600;
  }

  .form_1 {
    margin: 20px 0;
    border-bottom: 1px solid rgba(69, 69, 69, 0.3);
    padding-bottom: 50px;
    input {
      font-weight: 500;
      border: 1px solid #454545;
      padding: 10px 15px;
      border-radius: 100px;
      background-color: inherit;
      outline: 0;
      font-size: 15px;
      width: 300px;
      margin-right: 20px;
    }
  }
  .form_2 {
    margin: 50px 0;
    input {
      width: 50%;
      padding: 10px 12px;
      border-radius: 100px;
      border: 1px solid black;
      outline: none;
      background-color: inherit;
    }

    textarea {
      margin-top: 20px;
      width: 50%;
      padding: 10px 12px;
      height: 150px;
      border-radius: 12px;
      resize: none;
      border: 1px solid #454545;
      background-color: inherit;
    }
  }


  @media (max-width: 768px) {
    padding: 10px;

    .form_1 {
      input {
        width: 100%;
        margin: 10px 0;
      }
    }

    .form_2 {
      input {
        width: 100%;
      }

      textarea {
        width: 100%;
      }

      .checkbox_box {
        display: flex;
        gap: 10px;

        margin-bottom: 30px;
        div {
          display: flex;
          gap: 10px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    .form_2 .checkbox_box {
      display: none;
    }
  }
`

export const CartBottom = styled.div`
  background-color: #f2f2f2;
  padding: 35px;
  border-radius: 14px;
  margin-top: 30px;

  h2 {
    font-size: 30px;
    color: #454545;
    font-weight: 600;
  }

  .cart_bottom_text {
    display: flex;
    margin-top: 20px;
    color: rgba(69, 69, 69, 0.7);
    gap: 30px;
    align-items: center;
  }

  .cart_bottom_price {
    margin-top: 100px;
    font-size: 20px;
    font-weight: 600;
  }

  .buy_box {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    button {
      background-color: #454545;
      padding: 10px 100px;
      color: white;
      border: 0;
      border-radius: 100px;
    }

    .input_box {
      display: flex;
      gap: 10px;
      margin-left: 10px;
      p {
        font-size: 12px;
        color: rgba(69, 69, 69, 0.7);
      }
    }
  }
  @media (min-width: 769px) {
    .checkbox_box {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    .cart_bottom_price {
      margin-top: 20px;
    }

    .checkbox_box {
      margin-top: 20px;
      div {
        display: flex;
        margin: 10px 0;
        gap: 10px;
      }
    }
    .cart_bottom_text {
      flex-direction: column; 
      align-items: start;
    }

    .buy_box {
      align-items: start;
      flex-direction: column;
      button {  
        width: 100%;
      }
      .input_box p {

        width: 200px;
      }
    }
  }
`
