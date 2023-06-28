import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { HTMLAttributes } from "react";
import { Product } from "../../types/product";
import { Link } from "react-router-dom";
import ProductPromotionTag from "../promotion-tag/ProductPromotionTag";
import { moneyFormat } from "../../helpers/numberFormat";

const useStyles = makeStyles<Theme>((theme) => ({
  li: {
    display: "flex",
    transform: "scale(1)",
    "&:last-child": {
      "& > a": {
        marginRight: 20,
      },
    },
    "& > a": {
      textDecoration: "none",
      color: "inherit",
      display: "flex",
      flexDirection: "column",
      borderRadius: 6,
      boxShadow: "0 0 5px 0 #ddd",
      padding: 15,
      width: 310,
      backgroundColor: "#fff",
      transition: `box-shadow 0.3s ease`,
      "& > a > div > div > .prices": {
        transition: "all ease 0.5s",
      },
      "&:hover": {
        boxShadow: `0 0 5px 0 ${theme.palette.primary.dark}`,
        textDecoration: "none",
        "& > a > div > div > .prices": {
          transform: "translateY(-15px)",
        },
      },
      flex: 1,
      "& img": {
        width: 180,
        height: 180,
        objectFit: "contain",
        borderRadius: 6,
      },
    },
  },
  productDescription: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    wordBreak: "break-word",
  },
  imageWrapper: {
    height: 200,
    overflow: "hidden",
    width: "100%",
    marginBottom: 20,
    borderRadius: 6,
    display: "flex",
    justifyContent: "center",
  },
  priceContainer: {
    marginTop: 15,
  },
  fullPrice: {
    textDecoration: "line-through",
    marginBottom: 7,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    height: 180,
  },
  icon: {
    alignSelf: "center",
  },
  productId: {
    marginBottom: 5,
  },
  promotionTag: {
    position: "absolute",
    top: 10,
    right: 10,
  },
}));

interface FeaturedProductProps extends HTMLAttributes<HTMLLIElement> {
  product: Product;
}

const FeaturedProductItem: React.FC<FeaturedProductProps> = ({
  product,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const discountedPrice =
    product.price - product.price * (product.discountPercentage / 100);

  function createMarkup(html: string) {
    return {
      __html: html,
    };
  }

  return (
    <li {...rest} className={`${classes.li} ${className}`}>
      <Link to={`/produtos/${product.id}`}>
        <>
          {product.discountPercentage && (
            <ProductPromotionTag
              discounted={product.discountPercentage}
              className={classes.promotionTag}
            />
          )}
          <div className={classes.imageWrapper}>
            <img src={product.images[0]} alt="Produto em destaque no momento" />
          </div>
          <div className={classes.descriptionContainer}>
            <div>
              <Typography color="primary" fontWeight={600} fontSize={12}>
                {product.category}
              </Typography>
              <Typography
                className={classes.productId}
                fontWeight={600}
                fontSize={12}
              >
                ref. {product.id}
              </Typography>
              <Typography
                className={classes.productDescription}
                fontSize={14}
                dangerouslySetInnerHTML={createMarkup(product.description)}
              />
            </div>
            <div className={classes.priceContainer}>
              <Typography
                fontSize={14}
                color="#666"
                className={`${classes.fullPrice} prices`}
              >
                {moneyFormat(product.price)}
              </Typography>
              <Typography
                className="prices"
                fontSize={20}
                color="secondary"
                fontWeight={650}
              >
                {moneyFormat(discountedPrice)}
              </Typography>
            </div>
          </div>
        </>
      </Link>
    </li>
  );
};

export default FeaturedProductItem;
