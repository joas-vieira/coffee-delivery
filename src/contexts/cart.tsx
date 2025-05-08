import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { useNavigate } from 'react-router';
import { ItemCart } from '../contracts/item-cart';
import { NewOrderFormData } from '../pages/cart';
import {
  addItemAction,
  createOrderAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction
} from '../reducers/cart/action';
import { cartReducer } from '../reducers/cart/reducer';

interface CartContextType {
  cart: ItemCart[];
  addItem: (item: ItemCart) => void;
  removeItem: (itemId: ItemCart['id']) => void;
  incrementItemQuantity: (itemId: ItemCart['id']) => void;
  decrementItemQuantity: (itemId: ItemCart['id']) => void;
  createOrder: (order: NewOrderFormData) => void;
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
  const navigate = useNavigate();
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: []
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );

  const { cart } = cartState;

  function addItem(item: ItemCart) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: ItemCart['id']) {
    dispatch(removeItemAction(itemId));
  }

  function incrementItemQuantity(itemId: ItemCart['id']) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: ItemCart['id']) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  function createOrder(order: NewOrderFormData) {
    dispatch(createOrderAction(order, navigate));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        createOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
