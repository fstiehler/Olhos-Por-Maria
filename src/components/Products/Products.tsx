import { IProduct } from 'models';
import Product from './Product';

import * as S from './style';

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => { 
  const groupProductsBySize = () => {
    const groupedProducts: { [key: string]: IProduct[] } = {};

    products.forEach((p) => {
      const size = p.available_types;
      if (!groupedProducts[size]) {
        groupedProducts[size] = [];
      }
      groupedProducts[size].push(p);
    });

    return groupedProducts;
  };

  const renderGroupedProducts = () => {
    const groupedProducts = groupProductsBySize();

    return Object.keys(groupedProducts).map((size) => (
      <div key={size}>
        <S.SectionHeader>{`${size}`}</S.SectionHeader>
        <S.Container>
          {groupedProducts[size].map((p) => (
            <Product product={p} />
          ))}
        </S.Container>
      </div>
    ));
  };

  return <>{renderGroupedProducts()}</>;
};

export default Products;
