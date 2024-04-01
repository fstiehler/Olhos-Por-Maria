const formatPrice = (price: number, currency_id: string): string => {
  switch (currency_id) {
    case 'BRL':
      return price.toFixed(2).replace('.', ',');
    default:
      return price.toFixed(2);
  }
};

export default formatPrice;
