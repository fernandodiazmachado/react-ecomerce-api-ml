const CardComponent = ({ product, agregarAlCarrito }) => {
  
  return (
    <div className="card" >
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title} - <b>$ {product.price}</b></h5>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            agregarAlCarrito(event, product.title);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default CardComponent;
