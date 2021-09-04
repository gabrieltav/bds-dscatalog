import React from "react";
import { ScrollView } from "react-native";
import { ProductCard } from "../components";

import productImg from "../assets/product.png";
import { theme } from "../styles";

const products = [
  {
    id: 1,
    imgUrl: productImg,
    name: "Computador Desktop = Intel Core i7",
    price: 2279.0,
  },
  {
    id: 2,
    imgUrl: productImg,
    name: "Computador Desktop = Intel Core i7",
    price: 2279.0,
  },
  {
    id: 3,
    imgUrl: productImg,
    name: "Computador Desktop = Intel Core i7",
    price: 2279.0,
  },
  {
    id: 4,
    imgUrl: productImg,
    name: "Computador Desktop = Intel Core i7",
    price: 2279.0,
  },
  {
    id: 5,
    imgUrl: productImg,
    name: "Computador Desktop = Intel Core i7",
    price: 2279.0,
  },
];

const Catalog: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </ScrollView>
  );
};

export default Catalog;
