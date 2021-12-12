import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import ItemCount from "./components/ItemCount/ItemCount.jsx";
import ItemDetailsContainer from "./components/ItemListContainer/ItemDetailsContainer/ItemDetailsContainer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header carrito setCarrito />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greetings="BookShop Murakami's" />}
          />
          <Route
            path="/genero/:generoId"
            element={<ItemListContainer greetings="BookShop Murakami's" />}
          />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/contador" element={<ItemCount stock="10" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
