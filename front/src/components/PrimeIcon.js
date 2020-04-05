import React from 'react';
import { Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const PrimeDisplay = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Chip variant="outlined" color="secondary" label={props.prime} />
    </Box>
  );
};

const useStyles = makeStyles({
  box: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default PrimeDisplay;
