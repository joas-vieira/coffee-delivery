import { createContext, ReactNode, useContext, useReducer } from 'react';
import { Coffee } from '../contracts/coffee';
import { ItemCart } from '../contracts/item-cart';
import { addItemAction } from '../reducers/cart/action';
import { cartReducer } from '../reducers/cart/reducer';

interface CartContextType {
  cart: Coffee[];
  addItem: (item: ItemCart) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export function useCart() {
  return useContext(CartContext);
}

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const { cart } = cartState;

  function addItem(item: ItemCart) {
    dispatch(addItemAction(item));
  }

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
