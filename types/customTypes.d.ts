interface Product {
  _id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  product_location: string;
  supplier: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UseFetchResult<T> {
  data: T[];
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

type InputWithIconProps = TextInputProps & {
  placeholder?: string;
  value?: string;
  icon?: React.ReactNode;
  heading?: string;
};
