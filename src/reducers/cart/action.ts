import { ItemCart } from '../../contracts/item-cart';

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM'
}

export type CartActions = {
  type: CartActionTypes.ADD_ITEM;
  payload: {
    item: ItemCart;
  };
};

export function addItemAction(item: ItemCart): CartActions {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: {
      item
    }
  };
}
