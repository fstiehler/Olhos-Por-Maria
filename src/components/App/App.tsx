import { useEffect } from 'react';
import Loader from 'components/Loader';
import Products from 'components/Products';
import Cart from 'components/Cart';
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import FloatButtonService from 'components/FloatButtonService';
import * as S from './style';
import { useProducts } from 'contexts/products-context';
import Filter from 'components/Filter';
import Action from 'components/Action';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container>
      <Hero />
      {isFetching && <Loader />}
      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
        </S.Side>
        <S.Main>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
      <FloatButtonService />
      <Action />
      <Footer />
    </S.Container>
  );
}

export default App;
