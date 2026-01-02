import styled from "styled-components";

export const HouseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;

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

  button:hover svg {
    color: white;
  }
  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`

export const Houses1 = styled.div`
  display: flex;
  justify-content: space-between;
  .wrapper {
    width: 32%;
    border-bottom: 1px solid rgba(69, 69, 69, 0.3);
    padding-bottom: 30px;
    .Catalog {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 17px;
      font-weight: 600;
      color: #454545;
      margin: 20px 0;
      svg {
        transform: rotate(-45deg) scale(1.8);
      }
    } 
    span {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .wrapper {
      width: 100%;
      margin-bottom: 20px;
    }
    .wrapper img {
      width: 100%;
    } 
  }
`;

export const HouseMobile = styled.div`

  .swiper {
    padding-bottom: 50px;
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(69, 69, 69, 0.5);
  }

  .wrapper {
    border-bottom: 1px solid rgba(69, 69, 69, 0.5);
    padding-bottom: 30px;
    img {
      width: 100%;
    }

    .Catalog {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      font-weight:700;
      color: #454545;
      margin: 20px 0;
      padding-right: 5px;
      svg {
        transform: rotate(-45deg) scale(1.8);
      }
    } 
    span {
      font-size: 14px;
      font-weight: 500;
      color: #454545;
    }
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
    width: 100%;
    justify-content: center;
    margin: 50px 0;
  }

  button:hover {
    background-color: #454545;
    color: white;
  }

  button:hover svg {
    color: white;
  }

  @media (min-width: 769px) {
    display: none;
  }
`

