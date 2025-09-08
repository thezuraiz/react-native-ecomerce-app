import { FlatList } from "react-native";
import ProductCard from "./ProductCard";

const ProductRow = () => {
  const Products = [
    {
      id: 1,
      title: "Luxury Sofa",
      price: 200,
      category: "Furniture",
      imageUrl: "https://woodc.pk/wp-content/uploads/2023/12/eqre-700x700.webp",
    },
    {
      id: 2,
      title: "Wooden Table",
      price: 150,
      category: "Furniture",
      imageUrl:
        "https://interwood.pk/cdn/shop/files/Sienna_Center_Table.png?v=1756558228",
    },
    {
      id: 3,
      title: "Office Chair",
      price: 120,
      category: "Furniture",
      imageUrl:
        "https://chair.com.pk/wp-content/uploads/2025/01/Mason-Executive-Computer-Ch-1.jpg",
    },
    {
      id: 4,
      title: "Bed Set",
      price: 500,
      category: "Bedroom",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2E4gnUwUU4mv1UDre6LOlty-9juNd56wL7Q&s",
    },
    {
      id: 5,
      title: "Lamp",
      price: 50,
      category: "Decor",
      imageUrl:
        "https://www.southernliving.com/thmb/pqZdyiSIqgs5Q4LXskMofPp4glY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27566_IdeaHouse15660F-1c72c3dae8f645e59e15b912fca33fe8.jpg",
    },
  ];

  return (
    <FlatList
      data={Products}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
};

export default ProductRow;
