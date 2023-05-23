import React, { useCallback, useEffect, useState } from "react";
import { Slider, SliderContent, Slide, Arrow } from "./styles";
import Divider from "./Divider";
import { useApp } from "../../hooks/app";
import { Product } from "../../types/product";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const DEFAULT_TRANSITION = 0.45;

let timer: NodeJS.Timeout;

const ImageSlider: React.FC = () => {
  const { products } = useApp();
  const [width, setWidth] = useState(0);
  const [filteredBanners, setFilteredBanners] = useState<Product[]>([]);
  const [state, setState] = useState({
    translate: 0,
    transition: DEFAULT_TRANSITION,
    activeIndex: 0,
  });

  useEffect(() => {
    setFilteredBanners(products.slice(0, 3));
  }, [products]);

  const nextSlide = useCallback(() => {
    if (state.activeIndex === filteredBanners.length - 1)
      return setState({
        ...state,
        translate: 0,
        transition: DEFAULT_TRANSITION,
        activeIndex: 0,
      });

    setState({
      ...state,
      transition: DEFAULT_TRANSITION,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * width,
    });
  }, [filteredBanners, state, width]);

  useEffect(() => {
    clearTimeout(timer);

    timer = setTimeout(nextSlide, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [nextSlide]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  function handleResize() {
    const el = document.getElementById("slider");
    if (!el) return;

    setWidth(el.offsetWidth);

    setState((state) => ({
      ...state,
      transition: 0,
      translate: state.activeIndex * el.offsetWidth,
    }));
  }

  function prevSlide() {
    if (state.activeIndex === 0)
      return setState({
        ...state,
        transition: DEFAULT_TRANSITION,
        translate: (filteredBanners.length - 1) * width,
        activeIndex: filteredBanners.length - 1,
      });

    setState({
      ...state,
      transition: DEFAULT_TRANSITION,
      activeIndex: state.activeIndex - 1,
      translate: (state.activeIndex - 1) * width,
    });
  }

  function handleSetIndex(i: number) {
    setState({
      ...state,
      transition: DEFAULT_TRANSITION,
      activeIndex: i,
      translate: i * width,
    });
  }

  return (
    <Slider id="slider" hasBanners={filteredBanners.length > 0}>
      <SliderContent
        translateValue={state.translate}
        transition={state.transition}
      >
        {filteredBanners.map((banner) => (
          <Slide
            key={banner.id}
            imageSrc={banner.thumbnail}
            mobileImageSrc={banner[0]}
          />
        ))}
      </SliderContent>
      <Divider
        handleSetIndex={handleSetIndex}
        activeIndex={state.activeIndex}
        filteredBanners={filteredBanners}
      />
      <Arrow onClick={prevSlide} direction="left">
        <ChevronLeft color="primary" />
      </Arrow>
      <Arrow onClick={nextSlide} direction="right">
        <ChevronRight color="primary" />
      </Arrow>
    </Slider>
  );
};

export default ImageSlider;
