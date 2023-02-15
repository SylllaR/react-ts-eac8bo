import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { isDefaultPages } from './pages';
import { IsDefault } from './isDefault';

export const App = () => {
  return (
    <Routes>
      {isDefaultPages.map((page) => (
        <Route
          key={page.path}
          path={page.path}
          element={<IsDefault component={page.component} />}
        />
      ))}
    </Routes>
  );
};

export default App;
