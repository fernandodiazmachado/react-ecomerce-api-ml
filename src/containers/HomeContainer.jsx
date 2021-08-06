import { useContext } from "react";
import { Link } from "react-router-dom";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeContainer = ()=>{
  const { carrito } = useContext(EcommerceContext);
  return (
    <div>
      <h1>Productos en tu carrito: {carrito.length}</h1>
      <Link to={"/productos"}>Volver al listado de productos </Link>
    </div>
  );
};

export default HomeContainer;