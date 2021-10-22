import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  picture: {},
  pictureImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  descriptionWrapper: {
    zIndex: 1,
    width: 320,
    position: 'absolute',
    bottom: 23,
    display: 'flex',
    flexDirection: 'column',
    color: '#efefef',
    padding: '16px',
  },
  offer: {
    paddingTop: theme.spacing(1),
  },
}));

export default function Slide(props) {
  const { value, index } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <a href="#">
          <div className={classes.picture}>
            <picture className={classes.pictureImage}>
              <source
                srcSet={`${value.media.lg}?random=${index}`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${value.media.lg}?random=${index}`}
                media="(min-width: 768px)"
              />
              <img
                className={classes.image}
                src={`${value.media.lg}?random=${index}`}
              />
            </picture>
          </div>
        </a>
        <div className={classes.descriptionWrapper}>
          <div className={classes.description}>
            <Typography>{value.name}</Typography>
            <Typography>{value.description}</Typography>
          </div>
          <div className={classes.offer}>
            <Typography component="div">L{value.price}</Typography>
            <Button variant="contained" color="primary" disableElevation>
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
