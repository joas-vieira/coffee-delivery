import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money
} from '@phosphor-icons/react';
import { Fragment } from 'react/jsx-runtime';
import { useTheme } from 'styled-components';
import { InputText } from '../../components/form/input-text';
import { Radio } from '../../components/form/radio';
import { Separator } from '../../components/separator';
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
  PaymentForm
} from './styles';
import { useNavigate } from 'react-router';
import { useCart } from '../../contexts/cart';
import { useEffect } from 'react';

export function CartPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalItemsPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shippingPrice = 3.5;

  const totalPrice = totalItemsPrice + shippingPrice;

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);

  return (
    <CartContainer>
      <Info>
        <h2>Complete seu pedido</h2>

        <CartForm>
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
              />
              <InputText
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
              />
              <InputText
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
              />
              <InputText
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'complement' } }}
              />
              <InputText
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
              />
              <InputText
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
              />
              <InputText
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
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
              <Radio isSelected={true} value={'credit'}>
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </Radio>
              <Radio isSelected={false} value={'credit'}>
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>
              <Radio isSelected={false} value={'credit'}>
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </PaymentForm>
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

          <CheckoutButton type="submit" onClick={() => navigate('/success')}>
            Confirmar pedido
          </CheckoutButton>
        </CartSummary>
      </Info>
    </CartContainer>
  );
}
