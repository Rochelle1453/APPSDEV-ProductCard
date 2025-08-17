
const ProductCard = ({ image, name, price, description }) => {
  const handleBuy = () => {
    console.log(`You clicked Buy Now for: ${name}`);
  };

  return (

    <div className="cmp-card">
      <img src={image} alt={name} className="image" />
        <h2>{name}</h2>
        <p className="cmp-name">{description}</p>
        <p className="cmp-price">${price}</p>
        <button
          onClick={handleBuy}
          className="cmp-button"
        >
          Buy Now
        </button>
      </div>
  );
};

export default ProductCard;
