import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 18,
    height: 18,
    border: 0,
    background: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    border: '1px solid #fff',
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  },
}));

export default function PaginationDot(props) {
  const { index, active, onClick } = props;

  const classes = useStyles();

  let dotClass;

  if (active) {
    dotClass = `${classes.dot} ${classes.active}`;
  } else {
    dotClass = classes.dot;
  }

  const handleClick = () => {
    onClick(index);
  };

  return (
    <button className={classes.root} onClick={handleClick}>
      <div className={dotClass} />
    </button>
  );
}
