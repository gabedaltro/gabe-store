import React from "react";
import { Link } from "react-router-dom";

interface NavbarCategoryProps {
  category: string;
}

const NavbarCategory: React.FC<NavbarCategoryProps> = ({ category }) => {
  return <Link to={`/produtos?categoria=${category}`}>{category}</Link>;
};

export default NavbarCategory;
