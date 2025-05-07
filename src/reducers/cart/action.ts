import { ItemCart } from '../../contracts/item-cart';

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

export type CartActions =
  | {
      type: CartActionTypes.ADD_ITEM;
      payload: {
        item: ItemCart;
      };
    }
  | {
      type: CartActionTypes.REMOVE_ITEM;
      payload: {
        itemId: ItemCart['id'];
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

export function removeItemAction(itemId: ItemCart['id']): CartActions {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: {
      itemId
    }
  };
}
