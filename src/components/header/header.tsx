import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { useMenuItems } from '@hooks/useMenuItems';
import { Button } from '@components/buttons/button/button';
import { MenuButton } from '../menu/menu-button/menu.button';
import { useStyles } from './header.styles';
import { ROOT_TITLE } from '@constants/constants';

const { ROOT } = RoutesMap;

export const Header: FC = () => {
  const { root, titleButton } = useStyles();
  const { href, openMainMenu, showBackBtn } = useMenuItems();

  return (
    <div className={root}>
      <MenuButton href={href} openMainMenu={openMainMenu} showBackBtn={showBackBtn} />
      <Button href={ROOT} btnType="text" className={titleButton}>
        {ROOT_TITLE}
      </Button>
      {/* {openNetMenu && (
        <IconButton
          icon="net"
          onClick={openNetMenu}
          className={button}
          classNameIcon={eventsCount ? icon : undefined}
        />
      )} */}
    </div>
  );
};
