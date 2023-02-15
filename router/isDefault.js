import * as React from 'react';
import DefaultLayout from '../layouts/default';

export const IsDefault = ({ component: Component }) => {
  return (
    <>
      <DefaultLayout>
        <Component />
      </DefaultLayout>
    </>
  );
};

export default IsDefault;
