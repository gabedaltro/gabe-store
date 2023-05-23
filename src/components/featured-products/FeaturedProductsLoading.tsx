import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AnimatedBackground } from 'styles/animatedBackground';

const useStyles = makeStyles({
  loading: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'min-content',
    columnGap: 20,
    marginTop: 35,
    padding: 5,
    overflow: 'hidden',
  },
  img: {
    height: 200,
    width: '100%',
    borderRadius: 6,
    marginBottom: 20,
  },
  productName: {
    width: '100%',
    height: 20,
  },
  li: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 6,
    boxShadow: '0 0 5px 0 #ddd',
    padding: 20,
    width: 200,
    height: 350,
    alignItems: 'center',
    transition: 'transform 0.1s ease',
    transform: 'scale(1)',
    backgroundColor: '#fff',
  },
  title: {
    height: 30,
  },
});

const FeaturedProductsLoading: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <AnimatedBackground className={classes.title} />
      <div className={classes.loading}>
        {Array.from(Array(6).keys()).map(item => (
          <div className={classes.li} key={item}>
            <AnimatedBackground className={classes.img} />
            <AnimatedBackground className={classes.productName} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProductsLoading;
