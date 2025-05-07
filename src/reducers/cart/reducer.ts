import { produce } from 'immer';
import { ItemCart } from '../../contracts/item-cart';
import { CartActions } from './action';

interface CartState {
  cart: ItemCart[];
}

export function cartReducer(state: CartState, action: CartActions) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id
        );

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity;
        } else {
          draft.cart.push(action.payload.item);
        }
      });
    }

    case 'REMOVE_ITEM': {
      return produce(state, (draft) => {
        const itemToRemoveIndex = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );

        draft.cart.splice(itemToRemoveIndex, 1);
      });
    }

    case 'INCREMENT_ITEM_QUANTITY': {
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        );

        if (itemToIncrement) {
          itemToIncrement.quantity += 1;
        }
      });
    }

    case 'DECREMENT_ITEM_QUANTITY': {
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        );

        if (itemToDecrement && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1;
        }
      });
    }

    default:
      return state;
  }
}
