type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product">
      <div className="product-category">{product.category}</div>
      <div className="product-image">
        <img className="product-image-item" src={product.image} alt={product.name} />
      </div>
      <div className="product-context">
        <p className="product-context-name">{product.name}</p>
        <p className="product-price">{product.price.toLocaleString()} so'm</p>
        <button className="product-btn">ADD</button>
      </div>
    </div>
  );
};

export default ProductCard;
