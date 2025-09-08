import React from "react";
import { Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const CarouselSlider = () => {
  const slides = [
    "https://www.areaturkishfurniture.com/assets/img/slider/area-turkish-furniture-banner-001.jpg",
    "https://www.turkeyclassicfurniture.com/wp-content/uploads/2022/07/sandy-classic-sofa-set-4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSCea2E2IIuLTvpQk7Dek-dXRsh7Onh1uk8EW5TRI1vfZUCQY91g_9l8yI4S5nKWny0c&usqp=CAU",
  ];

  return (
    <Carousel
      loop
      width={width - 20}
      height={200}
      autoPlay
      scrollAnimationDuration={3000}
      pagingEnabled
      data={slides}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          className="h-full mx-2 rounded-xl"
          resizeMode="cover"
        />
      )}
    />
  );
};

export default CarouselSlider;
