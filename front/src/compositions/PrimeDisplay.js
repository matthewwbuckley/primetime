import React from 'react';
import { Button, TextField, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';

import withStore from '../hocs/withStore';
import withDispatch from '../hocs/withDispatch';

import {
  getPrimesAction,
  getNumberOfPages,
  setMax,
  setPage,
} from '../store/actions';

import PrimeContainer from '../components/PrimeContainer';

const PrimeDisplay = (props) => {
  const classes = useStyles();
  const isMaxNegative = props.store.max < 0;
  const isMaxTooLarge = props.store.max > 104729;
  const error = isMaxNegative || isMaxTooLarge;

  let errorMsg;
  if (isMaxNegative) {
    errorMsg = 'Please use positive values';
  }
  if (isMaxTooLarge) {
    errorMsg = 'Largest prime in database is 104,729';
  }

  return (
    <Container className={classes.background} p={2}>
      <Box display="block" p={4}>
        <TextField
          error={error}
          id="outlined-number"
          label="See primes smaller than..."
          type="number"
          value={props.store.max}
          helperText={errorMsg}
          onChange={(e) => {
            setMax(props.dispatch, e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Box>
      <Box display="block" p={4}>
        <Button
          disabled={error}
          onClick={() => {
            setPage(props.dispatch, 1);
            getNumberOfPages(props.dispatch, props.store.max);
            getPrimesAction(props.dispatch, props.store.max);
          }}
          className={classes.button}
          variant="outlined"
          color="primary"
        >
          Get Primes
        </Button>
      </Box>
      <Box className={classes.box} display="block" p={2}>
        {props.store.lastPage > 1 && (
          <Pagination
            count={props.store.lastPage}
            page={props.store.page}
            onChange={(e, page) => {
              setPage(props.dispatch, page);
              getPrimesAction(props.dispatch, props.store.max, page);
            }}
            color="primary"
          />
        )}
      </Box>
      <Box display="block" p={2}>
        <PrimeContainer />
      </Box>
    </Container>
  );
};

const useStyles = makeStyles({
  button: {
    padding: '10px 30px',
    fontSize: '0.9em',
    letterSpacing: '0.25em',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
  },
});

export default withStore(withDispatch(PrimeDisplay));
