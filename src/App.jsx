import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      image: "/images.jpg",
      name: "Smartphone Pro X",
      price: 899,
      description: "Latest smartphone with advanced camera and fast processor."
    },
    {
      id: 2,
      image: "/laptop.jpg",
      name: "Laptop Ultra 15",
      price: 1299,
      description: "Powerful laptop for work, gaming, and creativity."
    },
    {
      id: 3,
      image: "/noise-cancelling-headphone.jpg",
      name: "Noise-Canceling Headphones",
      price: 199,
      description: "Enjoy immersive sound with noise-canceling tech."
    },
    {
      id: 4,
      image: "Smartwatch Active.jpg",
      name: "Smartwatch Active",
      price: 249,
      description: "Track your fitness and stay connected on the go."
    },
    {
      id: 5,
      image: "Mirrorless Camera Z5.jpg",
      name: "Mirrorless Camera Z5",
      price: 999,
      description: "Capture stunning photos with interchangeable lenses."
    },
    {
      id: 6,
      image: "Tablet Air.jpg",
      name: "Tablet Air",
      price: 599,
      description: "Slim and powerful tablet for work and play."
    }
  ];

  return (
    <div className="cmp-main">
      <h1>Our Products</h1>
      <div className="cmp-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
