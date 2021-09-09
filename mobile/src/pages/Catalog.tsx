import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator, View } from "react-native";
import { ProductCard, SearchInput } from "../components";
import { api } from "../services";
import { theme } from "../styles";

const Catalog: React.FC = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fillProducts() {
    setLoading(true);
    const res = await api.get(
      `/products?page=0&size=12&sort=name,asc&categoryId=3&name`
    );
    setProducts(res.data.content);
    setLoading(false);
  }

  useEffect(() => {
    fillProducts();
  }, []);

  const data =
    search.length > 0
      ? products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
      : products;
  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <SearchInput
        placeholder="Nome do produto"
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#407BEE" />
      ) : (
        data.map((product) => <ProductCard {...product} key={product.id} />)
      )}
    </ScrollView>
  );
};

export default Catalog;
