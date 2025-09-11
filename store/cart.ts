import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartState = {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  getCartLength: () => number;
  isInCart: (id: string) => boolean;
};

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) =>
        set((state) => ({
          cart: [...state.cart, item],
        })),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((e) => e._id !== id),
        })),

      getCartLength: () => get().cart.length,
      isInCart: (id) => !!get().cart.find((e) => e._id === id),
    }),
    {
      name: "food-storage",

      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useCartStore;
