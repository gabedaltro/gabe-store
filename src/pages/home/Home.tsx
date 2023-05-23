import { makeStyles } from "@mui/styles";
import React from "react";
import ImageSlider from "../../components/image-slider/ImageSlider";
import { useApp } from "../../hooks/app";
import { AnimatedBackground } from "../../styles/animatedBackground";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  slider: {
    maxWidth: 960,
    width: "100%",
    margin: "0 auto",
    height: 400,
  },
  products: {
    padding: "0 40px",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  const { loading, products } = useApp();

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        {loading ? (
          <AnimatedBackground style={{ height: 400 }} />
        ) : (
          <ImageSlider />
        )}
      </div>
      <div className={classes.products}>
        <FeaturedProducts
          products={products.slice(0, 12)}
          title="em destaque"
        />
      </div>
      <div className={classes.slider}>aqui vai ter uma slider</div>
      <div className={classes.slider}>aqui vai ter uma slider</div>
    </div>
  );
};

export default Home;
