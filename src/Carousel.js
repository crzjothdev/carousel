import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core';
import {
  bindKeyboard,
  autoPlay,
  virtualize,
} from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

import Slide from './Slide';
import Pagination from './Pagination';

const EnhancedSwipeableViews = bindKeyboard(
  autoPlay(virtualize(SwipeableViews))
);

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: 'relative',
    },
    slide: {
      paddingBottom: 'calc(8/12 * 100%)',
      position: 'relative',
    },
  };
});

export default function Carousel(props) {
  const { items } = props;

  const classes = useStyles();

  const [index, setIndex] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const slideRenderer = ({ key, index }) => {
    const count = items.length;
    const currentIndex = mod(index, count);
    const current = items[currentIndex];

    return <Slide key={key} index={currentIndex} value={current} />;
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseOut = () => {
    setAutoplay(true);
  };

  return (
    <div
      className={classes.root}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <EnhancedSwipeableViews
        index={index}
        slideRenderer={slideRenderer}
        onChangeIndex={handleChangeIndex}
        className={classes.root}
        slideClassName={classes.slide}
        autoplay={autoplay}
        enableMouseEvents
      />
      <Pagination
        index={index}
        dots={items.length}
        onClick={handleChangeIndex}
      />
    </div>
  );
}
