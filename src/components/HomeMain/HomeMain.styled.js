import styled from "styled-components";

export const Home1 = styled.div`
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const HomeBox = styled.div`
`

export const HomePage = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  background-color: #F2F2F2;
  border-radius: 20px;

  margin-bottom: 100px;

  .swiper-pagination {
    margin-bottom: 20px;
  }

  .swiper-pagination-bullet-active {
    background-color: rgba(69, 69, 69, 0.5);
  }

  @media (min-width: 768px) {
    .swiper-pagination {
      display: flex;
      justify-content: end;
      padding: 0 50px;
    } 
  }
`;


export const HomePageSlide = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 100px 50px;

  .Home_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p.home_text {
    font-size: 50px;
    font-weight: 600;
    color: #454545;
  }

  p.home_color {
    background-color: #454545;
    color: white;
    border-radius: 90px;
    font-size: 45px;
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 0 15px;
    font-weight: 600;
    margin-top: 10px;
  }

  .Home_img img {
    width: 80%;
  }
  @media (min-width: 768px) {
    .Home_img_2 {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 50px 80px;
    p.home_text {
      font-size: 35px;
      font-weight: 700;
      margin-top: 30px;
    }

    .Home_img_2 {
      display: flex;
      justify-content: center;
    }

    p.home_color {
      font-size: 35px;
    }

    .Home_img_2 img {
      width: 90%;
    }
    .Home_img_2 {
      display: block;
    }

    .Home_img {
      display: none;
    }
  }
`
