export interface IProduct {
  sku: number;
  id: number;
  title: string;
  description: string;
  price: number;
  installments: number;
  available_types: string;
  grammage: string;
  currency_id: string;
  currency_format: string;
  is_available: boolean;
  is_schedule: boolean;
  waiting_schedule: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  installments: number;
  totalPrice: number;
  currency_id: string;
  currency_format: string;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}
