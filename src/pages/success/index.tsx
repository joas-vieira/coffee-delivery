import {
  Heading,
  Info,
  InfoBackground,
  InfoContainer,
  SuccessContainer
} from './styles';
import deliveryImage from '../../assets/images/delivery.svg';
import { MapPin, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

export function SuccessPage() {
  const theme = useTheme();

  return (
    <SuccessContainer>
      <Heading>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Heading>

      <InfoContainer>
        <InfoBackground>
          <Info>
            <div>
              <MapPin size={32} style={{ background: theme.purple }} />

              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>

                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              <Timer size={32} style={{ background: theme.yellow }} />

              <div>
                <span>Previsão de entrega</span>

                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </div>
            </div>

            <div>
              <Timer size={32} style={{ background: theme['yellow-dark'] }} />

              <div>
                <span>Pagamento na entrega</span>

                <span>
                  <strong>Cartão de Crédito</strong>
                </span>
              </div>
            </div>
          </Info>
        </InfoBackground>

        <img src={deliveryImage} />
      </InfoContainer>
    </SuccessContainer>
  );
}
