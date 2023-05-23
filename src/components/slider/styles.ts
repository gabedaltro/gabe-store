import styled from 'styled-components';

type SliderContentProps = {
  transition: number;
  translateValue: number;
};

type SlideProps = {
  imageSrc: string;
  mobileImageSrc: string;
};

type SliderProps = {
  hasBanners: boolean;
};

type ArrowProps = {
  direction: 'right' | 'left';
};

export const SliderContainer = styled.div`
  position: relative;
  padding: 0 50px;
`;

export const Slider = styled.div<SliderProps>`
  position: relative;
  overflow: hidden;
`;

export const SliderContent = styled.div<SliderContentProps>`
  transform: translateX(-${props => props.translateValue}px);
  transition: transform ease-out ${props => props.transition}s;
  display: flex;
  padding: 5px;
`;

export const Slide = styled.a<SlideProps>`
  display: block;
  height: 100%;
  width: 100%;
  background-image: url('${props => props.imageSrc}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
  @media (max-width: 600px) {
    background-image: url('${props => props.mobileImageSrc}');
  }
`;

export const Arrow = styled.button<ArrowProps>`
  display: flex;
  position: absolute;
  top: calc(50% - 20px);
  ${props => (props.direction === 'right' ? `right: 10px` : `left: 10px`)};
  height: 40px;
  width: 40px;
  justify-content: center;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  z-index: 10;
  img {
    transform: translateX(${props => (props.direction === 'left' ? '-2' : '2')}px);
    &:focus {
      outline: 0;
    }
  }
`;
