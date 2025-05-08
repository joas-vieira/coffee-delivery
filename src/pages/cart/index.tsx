import { zodResolver } from '@hookform/resolvers/zod';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money
} from '@phosphor-icons/react';
import { useForm } from 'react-hook-form';
import { Fragment } from 'react/jsx-runtime';
import { useTheme } from 'styled-components';
import { z } from 'zod';
import { InputText } from '../../components/form/input-text';
import { Radio } from '../../components/form/radio';
import { Separator } from '../../components/separator';
import { useCart } from '../../contexts/cart';
import { toMoney } from '../../utils/to-money';
import { CoffeeCard } from './components/coffee-card';
import {
  AddressForm,
  CardContainer,
  CardHeader,
  CartContainer,
  CartForm,
  CartSummary,
  CartTotal,
  CheckoutButton,
  Info,
  PaymentErrorMessage,
  PaymentForm
} from './styles';

const newOrderSchema = z.object({
  cep: z.string().min(8, 'CEP deve ter 8 dígitos'),
  street: z.string().min(1, 'Rua é obrigatória'),
  number: z.string().min(1, 'Número é obrigatório'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'Bairro é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().min(2, 'UF deve ter 2 dígitos'),
  paymentMethod: z.enum(['credit', 'debit', 'money'], {
    invalid_type_error: 'Método de pagamento é obrigatório'
  })
});

export type NewOrderFormData = z.infer<typeof newOrderSchema>;

export function CartPage() {
  const theme = useTheme();
  const { cart, createOrder } = useCart();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderSchema)
  });

  const paymentMethod = watch('paymentMethod');

  const totalItemsPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shippingPrice = 3.5;

  const totalPrice = totalItemsPrice + shippingPrice;

  function handleCreateOrder(data: NewOrderFormData) {
    if (!cart.length) {
      return alert('Adicione itens ao carrinho');
    }

    createOrder(data);
  }

  return (
    <CartContainer>
      <Info>
        <h2>Complete seu pedido</h2>

        <CartForm id="order" onSubmit={handleSubmit(handleCreateOrder)}>
          <CardContainer>
            <CardHeader>
              <MapPin size={22} color={theme['yellow-dark']} />

              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CardHeader>

            <AddressForm>
              <InputText
                placeholder="CEP"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep')}
              />
              <InputText
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />
              <InputText
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />
              <InputText
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'complement' } }}
                error={errors.complement}
                {...register('complement')}
              />
              <InputText
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <InputText
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />
              <InputText
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
            </AddressForm>
          </CardContainer>

          <CardContainer>
            <CardHeader>
              <CurrencyDollar size={22} color={theme.purple} />

              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardHeader>

            <PaymentForm>
              <Radio
                {...register('paymentMethod')}
                isSelected={paymentMethod === 'credit'}
                value={'credit'}
              >
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </Radio>
              <Radio
                {...register('paymentMethod')}
                isSelected={paymentMethod === 'debit'}
                value={'debit'}
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>
              <Radio
                isSelected={paymentMethod === 'money'}
                value={'money'}
                {...register('paymentMethod')}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentForm>
            {errors.paymentMethod && (
              <PaymentErrorMessage role="alert">
                {errors.paymentMethod.message}
              </PaymentErrorMessage>
            )}
          </CardContainer>
        </CartForm>
      </Info>

      <Info>
        <h2>Cafés selecionados</h2>

        <CartSummary>
          {cart.map((item) => (
            <Fragment key={item.id}>
              <CoffeeCard item={item} />

              <Separator style={{ margin: '2rem 0' }} />
            </Fragment>
          ))}

          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>{toMoney(totalItemsPrice)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{toMoney(shippingPrice)}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{toMoney(totalPrice)}</span>
            </div>
          </CartTotal>

          <CheckoutButton type="submit" form="order">
            Confirmar pedido
          </CheckoutButton>
        </CartSummary>
      </Info>
    </CartContainer>
  );
}
