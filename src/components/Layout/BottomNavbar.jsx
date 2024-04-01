import { BottomNavigation, BottomNavigationAction, Badge } from '@mui/material';
import { theme } from 'commons/style/theme';
import { useCart } from 'contexts/cart-context';
import React, { useState } from 'react';

const navigationData = [
  {
    label: 'Home',
    value: 'home',
  },
  {
    label: 'Carrinho',
    value: 'carrinho',
  },
  {
    label: 'Google Maps',
    value: 'contact',
  },
];

const BottomNavbar = () => {
  const { total, openCart } = useCart();

  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 'carrinho') {
      openCart();
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      {navigationData.map((item, index) => (
        <BottomNavigationAction
          key={index}
          {...item}
          style={{
            zIndex: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          label={
            item.value === 'carrinho' ? (
              <>
                <span style={{ marginRight: '15px' }}>{item.label}</span>
                <Badge
                  badgeContent={total.productQuantity}
                  color="primary"
                  max={999}
                  showZero
                />
              </>
            ) : item.value === 'contact' ? ( 
              <>
                <a
                  href={theme.links.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              </>
            ) : item.value === 'home' ? ( 
              <>
                <a
                  href="/"
                >
                  {item.label}
                </a>
              </>
            ) : (
              item.label
            )
          }
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNavbar;
