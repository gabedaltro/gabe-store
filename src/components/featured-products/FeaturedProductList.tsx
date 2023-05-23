import React, { HTMLAttributes } from "react";
import { Product } from "../../types/product";
import { makeStyles } from "@mui/styles";
import FeaturedProductItem from "./FeaturedProductItem";

const useStyles = makeStyles({
  ul: {
    display: "grid",
    gridGap: 15,
    gridAutoFlow: "column",
    gridAutoColumns: "min-content",
    overflowX: "auto",
    margin: "20px 0 0",
    padding: 5,
  },
});

interface FeaturedProductListProps extends HTMLAttributes<HTMLUListElement> {
  products: Product[];
}

const FeaturedProductsList: React.FC<FeaturedProductListProps> = ({
  products,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ul
      className={className ? `${classes.ul} ${className}` : classes.ul}
      {...rest}
    >
      {products.map((product) => (
        <FeaturedProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default FeaturedProductsList;
