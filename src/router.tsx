import { Route, Routes } from 'react-router';
import { DefaultLayout } from './layouts/default';

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<></>} />
      </Route>
    </Routes>
  );
}
