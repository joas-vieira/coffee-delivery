import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import heroBgImage from '../../assets/images/hero-bg.svg';
import heroImage from '../../assets/images/hero.svg';
import { Heading, HeadingContainer, HeadingContent, Info } from './styles';

export function HomePage() {
  const theme = useTheme();

  return (
    <div>
      <HeadingContainer>
        <HeadingContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={'2rem'}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.background}
                  style={{ backgroundColor: theme.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src={heroImage} />
        </HeadingContent>

        <img src={heroBgImage} id="heroBg" />
      </HeadingContainer>
    </div>
  );
}
