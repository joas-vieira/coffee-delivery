import { Route, Routes } from 'react-router';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Hello World</h1>
          </>
        }
      />
    </Routes>
  );
}
