import BottomNavbar from 'components/Layout/BottomNavbar';

import * as S from './style';
import Navbar from './Navbar';
import Home from './Home';
import Banners from './Banners';
import Campaing from './Campaing';

const Hero: React.FC = () => {
  return (
    <S.Container>
      <Campaing />
      <S.ContainerNav>
        <Navbar />
      </S.ContainerNav>
      <S.ContainerBottomNav>
        <BottomNavbar />
      </S.ContainerBottomNav>
      <Home />
      <Banners />
    </S.Container>
  );
};

export default Hero;
