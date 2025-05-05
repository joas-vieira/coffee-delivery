import { produce } from 'immer';
import { Coffee } from '../../contracts/coffee';
import { CartActions } from './action';

interface CartState {
  cart: Coffee[];
}

export function cartReducer(state: CartState, action: CartActions) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return produce(state, (draft) => {
        draft.cart.push(action.payload.item);
      });
    }
    default:
      return state;
  }
}
