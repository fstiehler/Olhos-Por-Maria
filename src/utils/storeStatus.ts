import { theme } from 'commons/style/theme';

export const isOpenStore = (): boolean => {
  const now = new Date();
  const currentTime = now.getHours();

  const openStore = theme.store.open
  const closeStore = theme.store.close

  return currentTime >= openStore && currentTime < closeStore;
};