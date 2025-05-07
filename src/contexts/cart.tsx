import { createContext, ReactNode, useContext, useReducer } from 'react';
import { ItemCart } from '../contracts/item-cart';
import { addItemAction, removeItemAction } from '../reducers/cart/action';
import { cartReducer } from '../reducers/cart/reducer';

interface CartContextType {
  cart: ItemCart[];
  addItem: (item: ItemCart) => void;
  removeItem: (itemId: ItemCart['id']) => void;
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

  function removeItem(itemId: ItemCart['id']) {
    dispatch(removeItemAction(itemId));
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
