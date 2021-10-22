import React from 'react';
import { makeStyles } from '@material-ui/core';
import { mod } from 'react-swipeable-views-core';

import PaginationDot from './PaginationDot';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    minHeight: theme.spacing(3),
  },
  selected: {},
}));

export default function Pagination(props) {
  const { index, dots, onClick } = props;

  const classes = useStyles();

  const children = [];
  const res = mod(index, dots);

  for (let i = 0; i < dots; i += 1) {
    // index relative to current cycle
    const cycleIndex = index + i - mod(index, dots);

    children.push(
      <PaginationDot
        key={i}
        index={cycleIndex}
        active={res === i}
        onClick={onClick}
      />
    );
  }

  return <div className={classes.root}>{children}</div>;
}
