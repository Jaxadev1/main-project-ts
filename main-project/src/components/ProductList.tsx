import React from "react";
import ProductCard from "./ProductCard";

type ProductListProps = {
  list: {
    id: number;
    // Add other fields as needed, e.g., name, price
    category: string;
    name: string;
    price: number;
    image: string
  }[];
};

const ProductList: React.FC<ProductListProps> = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
