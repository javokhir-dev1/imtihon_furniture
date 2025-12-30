import styled from "styled-components";

export const WhySection = styled.section`
  margin-top: 100px;
  .sectionHeader {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sectionHeader h2 {
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
    button.desktop_btn {
      display: none;
    }
  }

  @media (min-width: 769px) {
    button.mobile_btn {
      display: none;
    }
  }
`;

export const WhyGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
gap: 10px 0;
`;

export const WhyCard = styled.div`
  width: 310px;
  border: 1px solid rgba(69, 69, 69, 0.1);
  padding: 40px;

  .icon {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #454545;
  }

  h3 {
    margin-top: 80px;
    font-weight: bold;
    color: #454545;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: rgba(69, 69, 69, 0.5);
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 49%;
    .icon {
      width: 60px;
      height: 60px;
    }

    h3 {
      font-size: 20px;
      margin-top: 15px;
    }

    p {
      font-size: 18px;
    }
  }
`;
