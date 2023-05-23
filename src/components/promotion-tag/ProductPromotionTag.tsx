import React, { HtmlHTMLAttributes } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { numberFormat } from "../../helpers/numberFormat";

const styles = makeStyles({
  promotionTag: {
    backgroundColor: "#000",
    color: "white",
    alignItems: "center",
    fontSize: 12,
    borderRadius: "50%",
    padding: "8px 16px",
    display: "inline-flex",
  },
});

interface ProductPromotionTagProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  discounted: number;
}

const ProductPromotionTag: React.FC<ProductPromotionTagProps> = ({
  discounted,
  className,
  ...rest
}) => {
  const classes = styles();

  return (
    <span
      className={
        className
          ? `${classes.promotionTag} ${className}`
          : classes.promotionTag
      }
      {...rest}
    >
      <Typography fontSize={13}>
        {numberFormat(discounted, 0)}% <br /> OFF
      </Typography>
    </span>
  );
};

export default ProductPromotionTag;
