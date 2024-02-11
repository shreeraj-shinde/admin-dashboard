export type OrderItemType = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};

export type OrderType = {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: number;
  status: "Processing" | "shipped" | "Delivered";
  discount: number;
  subtotal: number;
  shippingCharges: number;
  tax: number;
  total: number;
  _id: string;
  orderItems: OrderItemType[];
};
