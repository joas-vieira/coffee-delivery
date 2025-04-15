import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { Aside, HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight={'fill'} />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to="/cart">
          <ShoppingCart size={22} weight={'fill'} />
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
