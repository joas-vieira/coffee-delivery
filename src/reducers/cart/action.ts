import { NavigateFunction } from 'react-router';
import { ItemCart } from '../../contracts/item-cart';
import { NewOrderFormData } from '../../pages/cart';

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CREATE_ORDER = 'CREATE_ORDER'
}

export type CartActions =
  | {
      type: CartActionTypes.ADD_ITEM;
      payload: {
        item: ItemCart;
      };
    }
  | {
      type:
        | CartActionTypes.REMOVE_ITEM
        | CartActionTypes.INCREMENT_ITEM_QUANTITY
        | CartActionTypes.DECREMENT_ITEM_QUANTITY;
      payload: {
        itemId: ItemCart['id'];
      };
    }
  | {
      type: CartActionTypes.CREATE_ORDER;
      payload: {
        newOrder: NewOrderFormData;
        callback: NavigateFunction;
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

export function incrementItemQuantityAction(
  itemId: ItemCart['id']
): CartActions {
  return {
    type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  };
}

export function decrementItemQuantityAction(
  itemId: ItemCart['id']
): CartActions {
  return {
    type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  };
}

export function createOrderAction(
  newOrder: NewOrderFormData,
  callback: NavigateFunction
): CartActions {
  return {
    type: CartActionTypes.CREATE_ORDER,
    payload: {
      newOrder,
      callback
    }
  };
}
