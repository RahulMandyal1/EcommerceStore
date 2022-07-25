import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" exact element={<ProductList />} />
        <Route path="/single-product" exact element={<SingleProduct />} />
        <Route path="/user-cart" exact element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
