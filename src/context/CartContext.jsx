import React, { useState, useContext } from "react";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const isOnCart = item => {
    let resultado = cart?.findIndex(product => product.id === item.id);
    console.log(resultado);
    return resultado;
  };

  const addToCart = (item, cantidad) => {
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

  /* Total */
  const total = () => {
    const sumaTotal = cart.reduce((x, y) => x + y.price * y.cantidad, 0);
    return sumaTotal;
  };

  /* SumarCantidad */
  const sumarCantidad = (item, quantity) => {
    const cantidad = [...cart];
    cantidad.forEach(c => {
      c.id === item.id && (c.cantidad += quantity);
    });
    setCart(cantidad);
  };

  const deleteFromCart = item => {
    setCart(cart.filter(product => product.id !== item.id));
  };

  const borrar = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        borrar,
        isCartOpen,
        setIsCartOpen,
        openCart,
        deleteFromCart,
        total,
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
