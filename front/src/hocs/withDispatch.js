import React from 'react';
import { DispatchContext } from '../App';

export default (Component) => {
  return (props) => (
    <DispatchContext.Consumer>
      {(dispatch) => <Component dispatch={dispatch} {...props} />}
    </DispatchContext.Consumer>
  );
};
