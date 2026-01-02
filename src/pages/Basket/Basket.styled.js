import styled from "styled-components";

export const CartStyled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  color: #333;

  /* --- Navigation --- */
  .navigate {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 40px;
    font-size: 14px;
    color: #7d7d7d;

    p {
      cursor: pointer;
      &:hover { color: #000; }
    }
    p.active {
      color: #000; /* Active breadcrumb black */
      cursor: default;
    }
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  /* --- Generic Section Box --- */
  .section-box {
    background: #F3F3F3; /* Matches the light gray background */
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #444;
  }

  /* --- Cart Table --- */
  .cart-header {
    display: grid;
    /* Grid columns: Photo, Info, Desc, Article, Actions */
    grid-template-columns: 80px 1.5fr 2fr 1.5fr 1fr;
    gap: 20px;
    color: #999;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .cart-item {
    display: grid;
    grid-template-columns: 80px 1.5fr 2fr 1.5fr 1fr;
    gap: 20px;
    align-items: flex-start;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #E0E0E0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    .img-box img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .info h4 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 10px 0;
      line-height: 1.4;
    }
    .info b {
      font-size: 18px;
      font-weight: 700;
    }

    .desc, .article {
      font-size: 13px;
      line-height: 1.6;
      color: #666;
      white-space: pre-line; /* Allows line breaks from data */
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between; /* Pushes Trash icon to right */
    }

    .counter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF; /* White box */
      border-radius: 8px;
      padding: 8px 12px;
      width: 90px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.02);

      button {
        border: none;
        background: transparent;
        font-size: 18px;
        cursor: pointer;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        &:hover { color: #000; }
      }
      span {
        font-weight: 500;
        font-size: 16px;
      }
    }

    .delete-btn {
      cursor: pointer;
      color: #333;
      padding-left: 15px;
      svg {
        width: 20px;
        height: 20px;
      }
      &:hover { color: #ff0000; }
    }
  }

  /* --- Forms --- */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .full-width-inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input, textarea {
    width: 100%;
    background: transparent;
    border: 1px solid #C0C0C0; /* slightly darker border */
    border-radius: 50px; /* Pill shape */
    padding: 18px 25px;
    font-size: 16px;
    font-family: inherit;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
      color: #777;
    }
    &:focus {
      border-color: #333;
    }
  }

  textarea {
    border-radius: 20px; /* Less round for textarea */
    height: 120px;
    resize: none;
  }

  /* --- Payment Section --- */
  .payment-area {
    /* Layout */
  }

  .summary-lines {
    margin-bottom: 30px;
    
    .line {
      display: flex;
      justify-content: space-between;
      align-items: flex-end; /* Align to bottom so dots sit right */
      margin-bottom: 12px;
      font-size: 16px;
      color: #666;

      .dots {
        flex-grow: 1;
        border-bottom: 1px dotted #999;
        margin: 0 10px 5px 10px; /* 5px bottom margin lifts dots up slightly */
      }
      
      .value {
        color: #333;
        font-weight: 500;
      }
    }
  }

  .total-block {
    .total-price {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 25px;
      color: #333;
    }

    .buy-actions {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .buy-btn {
      width: fit-content;
      background: #444;
      color: #fff;
      padding: 16px 60px;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: background 0.3s;
      
      &:hover {
        background: #000;
      }
    }

    .terms {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 12px;
      color: #999;

      input {
        width: auto;
        margin: 0;
      }
      label {
        cursor: pointer;
      }
    }
  }

  /* --- Mobile Responsive --- */
  @media (max-width: 900px) {
    .cart-header { display: none; }
    
    .cart-item {
      grid-template-columns: 80px 1fr;
      grid-template-areas: 
        "img info"
        "desc desc"
        "article article"
        "actions actions";
      gap: 15px;

      .img-box { grid-area: img; }
      .info { grid-area: info; }
      .desc { grid-area: desc; }
      .article { grid-area: article; }
      .actions { grid-area: actions; width: 100%; }
    }

    .form-grid {
      grid-template-columns: 1fr;
    }
  }
`;