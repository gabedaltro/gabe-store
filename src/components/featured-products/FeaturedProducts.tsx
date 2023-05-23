import React from "react";
import FeaturedProductList from "./FeaturedProductList";
import { makeStyles } from "@mui/styles";
import { Product } from "../../types/product";
import { useApp } from "../../hooks/app";
import { Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { AnimatedBackground } from "../../styles/animatedBackground";
import Slider from "../slider/Slider";
import FeaturedProductItem from "./FeaturedProductItem";

const useStyles = makeStyles({
  loading: {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "min-content",
    columnGap: 20,
    marginTop: 35,
    padding: 5,
    overflow: "hidden",
  },
  img: {
    height: 200,
    width: "100%",
    borderRadius: 6,
    marginBottom: 20,
  },
  productName: {
    width: "100%",
    height: 20,
  },
  li: {
    display: "flex",
    flexDirection: "column",
    borderRadius: 6,
    boxShadow: "0 0 5px 0 #ddd",
    padding: 20,
    width: 200,
    height: 350,
    alignItems: "center",
    transition: "transform 0.1s ease",
    transform: "scale(1)",
    backgroundColor: "#fff",
  },
  productItem: {
    marginRight: 10,
  },
  title: {
    height: 30,
  },
  headerTitle: {
    gap: 15,
    display: "flex",
    alignItems: "center",
    padding: "10px 5px",
  },
});

interface FeaturedProductsProps {
  products: Product[];
  title: string;
  containerClassname?: string;
  sliderContainerClassname?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  title,
  containerClassname,
  sliderContainerClassname,
}) => {
  const classes = useStyles();
  const { isMobile } = useApp();

  return (
    <>
      {title ? (
        <div className={classes.headerTitle}>
          <Star fontSize="large" color="primary" />
          <Typography fontSize={26} fontWeight={650}>
            EM DESTAQUE
          </Typography>
        </div>
      ) : (
        <AnimatedBackground className={classes.title} />
      )}
      {products.length > 0 ? (
        !isMobile ? (
          <Slider
            className={sliderContainerClassname}
            amount={products.length}
            itemWidth={230}
          >
            {products.map((product) => (
              <FeaturedProductItem
                key={product.id}
                product={product}
                className={classes.productItem}
              />
            ))}
          </Slider>
        ) : (
          <FeaturedProductList
            products={products}
            className={containerClassname}
          />
        )
      ) : (
        <div className={classes.loading}>
          {Array.from(Array(6).keys()).map((item) => (
            <div className={classes.li} key={item}>
              <AnimatedBackground className={classes.img} />
              <AnimatedBackground className={classes.productName} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;
