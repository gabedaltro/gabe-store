import React from "react";
import ImageSlider from "../../components/image-slider/ImageSlider";
import { useApp } from "../../hooks/app";
import { AnimatedBackground } from "../../styles/animatedBackground";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts";
import { styled } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Slider = styled("div")({
  maxWidth: 960,
  width: "100%",
  margin: "0 auto",
  height: 400,
});

const Home: React.FC = () => {
  const { loading, products } = useApp();

  return (
    <Container>
      <Slider>
        {loading ? (
          <AnimatedBackground style={{ height: 400 }} />
        ) : (
          <ImageSlider />
        )}
      </Slider>
      <div>
        <FeaturedProducts
          products={products.slice(0, 12)}
          title="em destaque"
        />
      </div>
      <Slider>aqui vai ter uma slider</Slider>
      <Slider>aqui vai ter uma slider</Slider>
    </Container>
  );
};

export default Home;
