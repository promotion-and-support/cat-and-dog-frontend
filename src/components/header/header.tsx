import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { Button } from '@components/buttons/button/button';
import { useStyles } from './header.styles';
import { ROOT_TITLE } from '@constants/constants';
import { MenuButton } from '../menu/menu-button/menu.button';

const { ROOT } = RoutesMap;

export const Header: FC = () => {
  const { root, titleButton } = useStyles();

  return (
    <div className={root}>
      <MenuButton />
      <Button href={ROOT} btnType="text" className={titleButton}>
        {ROOT_TITLE}
      </Button>
    </div>
  );
};
