import React, { useMemo } from 'react';
import Typography from 'components/typography/Typography';
import { Product } from 'types/product';
import { makeStyles } from '@material-ui/styles';
import ProductItem from 'components/product-item/ProductItem';
import Slider, { Settings } from 'react-slick';
import SlickArrowRight from 'components/slick-slider/SlickArrowRight';
import SlickArrowLeft from 'components/slick-slider/SlickArrowLeft';

const useStyles = makeStyles({
  productItem: {
    marginRight: 10,
  },
  slider: {
    marginTop: 30,
  },
});

interface FeaturedProductsSliderProps {
  products: Product[];
  title: string;
  containerClassname?: string;
  sliderContainerClassname?: string;
}

const FeaturedProductsSlider: React.FC<FeaturedProductsSliderProps> = ({ products, title }) => {
  const classes = useStyles();

  const sliderSettings: Settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 150,
      autoplaySpeed: 6000,
      cssEase: 'linear',
      nextArrow: <SlickArrowRight />,
      prevArrow: <SlickArrowLeft />,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    [],
  );

  return (
    <>
      <Typography align="center" palette="primary" isTitle>
        {title}
      </Typography>
      <Slider className={classes.slider} {...sliderSettings}>
        {products.map(product => (
          <ProductItem key={product.codigo_produto} product={product} className={classes.productItem} />
        ))}
      </Slider>
    </>
  );
};

export default FeaturedProductsSlider;
