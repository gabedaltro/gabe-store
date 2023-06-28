import styled from "styled-components";

type SliderContentProps = {
  transition: number;
  translatevalue: number;
};

type SlideProps = {
  imagesrc: string;
};

type ArrowProps = {
  direction: "right" | "left";
};

export const Slider = styled.div`
  position: relative;
  height: 400px;
  margin: 0;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const SliderContent = styled.div<SliderContentProps>`
  transform: translateX(-${(props) => props.translatevalue}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 400px;
  display: flex;
`;

export const Slide = styled.a<SlideProps>`
  display: block;
  height: 100%;
  width: 100%;
  background-image: url("${(props) => props.imagesrc}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
`;

export const Arrow = styled.button<ArrowProps>`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "right" ? `right: 10px` : `left: 10px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: rgba(250, 250, 250, 0.8);
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  border: 1px solid #eee;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
    background: #eee;
  }
  img {
    transform: translateX(
      ${(props) => (props.direction === "left" ? "-2" : "2")}px
    );
    &:focus {
      outline: 0;
    }
  }
  @media (max-width: 600px) {
    height: 40px;
    width: 40px;
    svg {
      height: 0.8em;
    }
  }
`;
