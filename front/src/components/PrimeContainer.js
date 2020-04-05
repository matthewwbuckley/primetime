import React, { useEffect } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

import withStore from '../hocs/withStore';

import PrimeIcon from './PrimeIcon';

const PrimeContainer = (props) => {
  const { width } = props;

  useEffect(() => {}, [props.store.primes]);

  return (
    <GridList cellHeight={60} cols={columns[width]}>
      {props.store.primes.map((prime) => (
        <GridListTile key={prime} cols={1}>
          <PrimeIcon prime={prime} />
        </GridListTile>
      ))}
    </GridList>
  );
};

const columns = {
  xl: 10,
  lg: 10,
  md: 5,
  sm: 5,
  xs: 3,
};

export default withWidth()(withStore(PrimeContainer));
