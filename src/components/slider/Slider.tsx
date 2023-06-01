import React, { HTMLAttributes, useCallback, useEffect, useState } from "react";
import {
  Slider as StyledSlider,
  SliderContent,
  Arrow,
  SliderContainer,
} from "./styles";
import { useWindowSize } from "../../hooks/windowSize";
import { uuidv4 } from "../../helpers/uuidv4";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  itemWidth: number;
  amount: number;
}

const Slider: React.FC<SliderProps> = ({
  children,
  amount,
  itemWidth,
  className,
  ...rest
}) => {
  const [containerWidth, setContainerWidth] = useState(330);
  const [step, setStep] = useState(0);
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
  });
  const { width } = useWindowSize();
  const uuid = uuidv4();

  const handleResize = useCallback(() => {
    const el = document.getElementById(`slider-${uuid}`);
    if (!el) return;

    const elWidth = el.offsetWidth;
    setContainerWidth(elWidth - itemWidth);

    setStep(Math.ceil((amount * itemWidth) / elWidth));
  }, [amount, itemWidth, uuid]);

  useEffect(() => {
    handleResize();
  }, [width, handleResize]);

  function nextSlide() {
    if (state.activeIndex === step - 1)
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });

    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * containerWidth,
    });
  }

  function prevSlide() {
    if (state.activeIndex === 0)
      return setState({
        ...state,
        translate: (step - 1) * containerWidth,
        activeIndex: step - 1,
      });

    setState({
      ...state,
      activeIndex: state.activeIndex - 1,
      translate: (state.activeIndex - 1) * containerWidth,
    });
  }

  return (
    <SliderContainer>
      <Arrow onClick={prevSlide} direction="left">
        <ChevronLeft color="primary" />
      </Arrow>
      <Arrow onClick={nextSlide} direction="right">
        <ChevronRight color="primary" />
      </Arrow>
      <StyledSlider
        id={`slider-${uuid}`}
        hasBanners={step > 0}
        className={className}
        {...rest}
      >
        <SliderContent
          translateValue={state.translate}
          transition={state.transition}
        >
          {children}
        </SliderContent>
      </StyledSlider>
    </SliderContainer>
  );
};

export default Slider;
