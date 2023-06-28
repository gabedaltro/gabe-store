import React from "react";
import FeaturedProductList from "./FeaturedProductList";
import { Product } from "../../types/product";
import { useApp } from "../../hooks/app";
import { Typography, styled } from "@mui/material";
import { Star } from "@mui/icons-material";
import { AnimatedBackground } from "../../styles/animatedBackground";
import Slider from "../slider/Slider";
import FeaturedProductItem from "./FeaturedProductItem";
import { useWindowSize } from "../../hooks/windowSize";

const HeaderTitle = styled("div")({
  margin: "20px 0",
  gap: 15,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  padding: "10px 5px",
});

const Loading = styled("div")({
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "min-content",
  columnGap: 20,
  marginTop: 35,
  padding: 5,
  overflow: "hidden",
});

const CustomAnimatedBackgroundImg = styled(AnimatedBackground)({
  height: 200,
  width: "100%",
  borderRadius: 6,
  marginBottom: 20,
});

const Title = styled(AnimatedBackground)({
  height: 30,
  marginTop: 20,
});

const CustomFeaturedProductItem = styled(FeaturedProductItem)({
  marginRight: 10,
});

const Li = styled("div")({
  display: "flex",
  flexDirection: "column",
  borderRadius: 6,
  boxShadow: "0 0 5px 0 #ddd",
  padding: 20,
  width: 290,
  height: 350,
  alignItems: "center",
  transition: "transform 0.1s ease",
  transform: "scale(1)",
  backgroundColor: "#fff",
});

const CustomAnimatedBackgroundProduct = styled(AnimatedBackground)({
  width: "100%",
  height: 20,
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
  const { loading } = useApp();
  const { isMobile } = useWindowSize();

  return (
    <>
      {!loading ? (
        <>
          <HeaderTitle>
            <Star fontSize="large" color="primary" />
            <Typography fontSize={26} fontWeight={650}>
              {title.toUpperCase()}
            </Typography>
          </HeaderTitle>
          {!isMobile ? (
            <Slider
              className={sliderContainerClassname}
              amount={products.length}
              itemWidth={400}
            >
              {products.map((product) => (
                <CustomFeaturedProductItem key={product.id} product={product} />
              ))}
            </Slider>
          ) : (
            <FeaturedProductList
              products={products}
              className={containerClassname}
            />
          )}
        </>
      ) : (
        <>
          <Title />
          <Loading>
            {Array.from(Array(6).keys()).map((item) => (
              <Li key={item}>
                <CustomAnimatedBackgroundImg />
                <CustomAnimatedBackgroundProduct />
              </Li>
            ))}
          </Loading>
        </>
      )}
    </>
  );
};

export default FeaturedProducts;
