import useFetch from "@/hooks/useFetch";
import { ActivityIndicator, FlatList, Text } from "react-native";
import ProductCard from "./ProductCard";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch<Product>({
    url: "http://localhost:3132/api/products/",
  });

  return isLoading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : error ? (
    <Text>Error fetching products</Text>
  ) : (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
};

export default ProductRow;
