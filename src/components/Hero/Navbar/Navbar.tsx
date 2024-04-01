/* eslint-disable jsx-a11y/anchor-has-content */
import * as S from './style';
import React from 'react';
import { Badge, Tooltip, Input } from 'antd';
import { isOpenStore } from 'utils/storeStatus';
import { theme } from 'commons/style/theme';
import { NotificationOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from '../../../static/logos/logoFarmaciaSabtaRegina.png';
import LogoMobile from '../../../static/logo-farmacia2.png';
import Profile from '../../../static/Profile.jpeg';
import WhatsApp from '../../../static/whatsapp.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = () => {
  const openStore = isOpenStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <S.LogoImage src={Logo} alt="Inc Logo" />
          <S.LogoImageMobile src={LogoMobile} alt="Inc Logo" />
        </S.Logo>
        <S.Pesquisa>
          <Input
            placeholder="O que você deseja encontrar?"
            prefix={<SearchOutlined />}
            style={{ borderRadius: 50, height: '5vh' }}
          />
        </S.Pesquisa>
        <S.AreaIcon>
          <a
            target="_blank"
            href="https://wa.me/5547996277454?text=Olá%20Vim%20através%20do%20site%20Farmácia%20Santa%20Regina.com.br"
            rel="noreferrer"
          >
            <S.Icone1 src={WhatsApp} alt="icon" />{' '}
          </a>
          <Stack direction="row" spacing={2}>
            <Avatar
              onClick={handleMenu}
              alt="Remy Sharp"
              src={Profile}
              sx={{ width: 38 }}
            />
            <div>
              <Menu
                sx={{ marginTop: '70px', marginLeft: '-15px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>

                <a
                  target="_blank"
                  href="https://www.idealmarketing.com.br/blog/wp-content/uploads/2018/07/o-que-%C3%A9-erro-404.png"
                  rel="noreferrer"
                >
                  <MenuItem>Disconnect </MenuItem>
                </a>
              </Menu>
            </div>
          </Stack>
        </S.AreaIcon>

        <S.Location>
          <S.LocationIcon>
            <Tooltip
              title={openStore ? 'Fecha as 22:00 :)' : 'Abre amanhã às 8:00 :)'}
              color={openStore ? 'green' : 'red'}
            >
              <Badge
                className="bubble-dot"
                dot
                color={openStore ? 'green' : 'red'}
              >
                <NotificationOutlined
                  style={{
                    fontSize: 16,
                    color: theme.colors.tertiary,
                  }}
                />
              </Badge>
              <S.Store>
                {openStore ? 'FARMÁCIA ABERTA' : 'FARMÁCIA FECHADA'}
              </S.Store>
            </Tooltip>
          </S.LocationIcon>
        </S.Location>
      </S.Content>
    </S.Container>
  );
};

export default Navbar;
