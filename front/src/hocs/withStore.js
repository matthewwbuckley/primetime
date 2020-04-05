import React from 'react';
import { StoreContext } from '../App';

export default (Component) => {
  return (props) => (
    <StoreContext.Consumer>
      {(store) => <Component store={store} {...props} />}
    </StoreContext.Consumer>
  );
};
