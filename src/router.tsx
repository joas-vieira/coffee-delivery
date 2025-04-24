import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts/default';
import { HomePage } from './pages/home';
import { CartPage } from './pages/cart';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
