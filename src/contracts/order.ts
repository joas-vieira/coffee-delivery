import { ItemCart } from './item-cart';

export interface Order {
  id: number;
  cep: string;
  street: string;
  number: string;
  complement?: string | undefined;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'credit' | 'debit' | 'money';
  items: ItemCart[];
}
