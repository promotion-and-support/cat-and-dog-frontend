import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { useMenuItems } from '@hooks/useMenuItems';
import { IconButton } from '@components/buttons/icon.button/icon.button';
import { useStyles } from './menu.button.styles';

export const MenuButton: FC = () => {
  const { button } = useStyles();
  const { href, openMainMenu, showBackBtn } = useMenuItems();

  return (
    <>
      {openMainMenu && !showBackBtn && (
        <IconButton icon="menu" onClick={openMainMenu} className={button} />
      )}
      {!openMainMenu && !showBackBtn && (
        <IconButton icon="home" href={RoutesMap.ROOT} className={button} />
      )}
      {showBackBtn && <IconButton icon="arrowLeft" href={href} className={button} />}
    </>
  );
};

//       {openMainMenu && !showBackBtn && (
//         <IconButton icon="menu" onClick={openMainMenu} className={button} />
//       )}
//       {!openMainMenu && !showBackBtn && (
//         <IconButton icon="home" href={RoutesMap.ROOT} className={button} />
//       )}
//       {showBackBtn && <IconButton icon="arrowLeft" href={href} className={button} />}
