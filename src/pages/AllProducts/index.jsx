import React from "react";
import { RightArr } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { All } from "./AllProducts.styled";
import Lamp from "../../components/Lamp";

function AllProducts(props) {
  const { goToHome } = useAppNavigation()

  return (
    <All>
      <div className="navigate" style={{margin: "0 auto", maxWidth: "1300px", width: "100%"}}>
        <p onClick={goToHome}>Главная</p>
        <RightArr />
      </div>

      <Lamp />
    </All>
  );
}

export default AllProducts;
