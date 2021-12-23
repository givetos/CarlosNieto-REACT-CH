import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const isOnCart = item => {
    let resultado = cart?.findIndex(product => product.id === item.id);
    console.log(resultado);
    return resultado;
  };

  const terminarCarrito = b => {
    console.log("terminarCarrito" + irAlCarrito);
    setIrAlCarrito(b);
  };

  const addToCart = (item, cantidad) => {
    precioTotal();
    terminarCarrito(true);
    if (isOnCart(item) === -1) {
      setCart([...cart, { ...item, cantidad }]);
      console.log(cart);
    } else {
      let itemAux = cart.find(p => p.id === item.id);

      let itemAux2 = {
        id: itemAux.id,
        nombre: itemAux.nombre,
        precio: itemAux.precio,
        stock: itemAux.stock,
        cantidad: itemAux.cantidad + cantidad,
        generoId: itemAux.generoId,
        img: itemAux.img,
      };
      console.log(itemAux2);

      const cartAux = cart.filter(product => product.id !== itemAux.id);

      setCart([...cartAux, itemAux2]);
    }
  };

  const calcularTotalPorItem = item => {
    return item.precio * item.cantidad;
  };

  function precioTotal() {
    let subTotal = cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    return subTotal;
  }

  const deleteFromCart = item => {
    setCart(cart.filter(product => product.id !== item.id));
  };

  const borrar = () => {
    setCart([]);
  };
  const getUser = form => {
    setUserEmail(form);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        precioTotal,
        calcularTotalPorItem,
        terminarCarrito,
        irAlCarrito,
        cart,
        borrar,
        isCartOpen,
        setIsCartOpen,
        openCart,
        deleteFromCart,
        getUser,
        userEmail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useIsCartOpen() {
  return useContext(CartContext).isCartOpen;
}

export function useCartOpen() {
  return useContext(CartContext).openCart;
}

export function useCart() {
  return useContext(CartContext).cart;
}

export function useDeleteFromCart() {
  return useContext(CartContext).deleteFromCart;
}

export default CartContext;
