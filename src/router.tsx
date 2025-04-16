import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts/default';
import { HomePage } from './pages/home';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
