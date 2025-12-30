import styled from "styled-components";

export const BrandsSection = styled.section`
  margin-top: 80px; 
  .brands-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 2em;
      color: #454545;
    }
  }

  .arrows button {
    background-color: white;
    border: 0;
    margin: 0 5px;
  }

  .brands-grid-desktop {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  .brands-grid-mobile {
    margin-top: 50px;
    position: relative;

    .swiper {
      padding-bottom: 40px;
    }

    .swiper-slide {
      width: 80%;
    }
    .swiper-pagination-bullet-active {
      background-color: rgba(69, 69, 69, 0.5);
    }

    .swiper-pagination {
      position: absolute;
      bottom: 0;
    }
  }
  @media (max-width: 768px) {
    .arrows {
      display: none;
    }

    .brands-grid-desktop {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .brands-grid-mobile {
      display: none;
    }
  }
`;

export const BrandCard = styled.div`
  padding: 10px 20px;
  border: 1px solid rgba(69, 69, 69, 0.3);
  width: 24%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandCardMobile = styled.div`
  padding: 10px 20px;
  border: 1px solid rgba(69, 69, 69, 0.3);
  display: flex;
  height: 140px;
  justify-content: center;
  align-items: center;
`   
