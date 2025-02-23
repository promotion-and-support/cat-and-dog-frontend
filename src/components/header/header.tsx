import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { useMenuItems } from '@hooks/useMenuItems';
import { IconButton } from '@components/buttons/icon.button/icon.button';
import { Button } from '@components/buttons/button/button';
import { useStyles } from './header.styles';

export const Header: FC = () => {
  const { root, titleButton, button } = useStyles();
  const { name, href, openMainMenu, showBackBtn } = useMenuItems();

  return (
    <div className={root}>
      {openMainMenu && !showBackBtn && (
        <IconButton icon="menu" onClick={openMainMenu} className={button} />
      )}
      {!openMainMenu && !showBackBtn && (
        <IconButton icon="home" href={RoutesMap.ROOT} className={button} />
      )}
      {showBackBtn && <IconButton icon="arrowLeft" href={href} className={button} />}
      <Button href={href} btnType="text" className={titleButton}>
        {name}
      </Button>
    </div>
  );
};
