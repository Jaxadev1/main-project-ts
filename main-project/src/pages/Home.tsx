import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {

  const [products, setProducts] = useState([])

  function getProducts(){
    fetch('https://285f106ea8d3b1af.mokky.dev/products').then(function(res){
      return res.json()
    }).then(function(data){
      setProducts(data)
    }).catch(function(err) {
      console.log(err, "error")
    })
  }

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <main className="main">
      <div className="container">
        <ProductList list={products}/>
      </div>
    </main>
  );
};

export default Home;
