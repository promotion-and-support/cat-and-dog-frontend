import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
// import { useMenuItems } from '@hooks/useMenuItems';
// import { IconButton } from '@components/buttons/icon.button/icon.button';
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

// export const Header: FC = () => {
//   const { root, titleButton, button, icon } = useStyles();
//   const { name, href, eventsCount, openMainMenu, openNetMenu, showBackBtn } = useMenuItems();

//   return (
//     <div className={root}>
//       {openMainMenu && !showBackBtn && (
//         <IconButton icon="menu" onClick={openMainMenu} className={button} />
//       )}
//       {!openMainMenu && !showBackBtn && (
//         <IconButton icon="home" href={RoutesMap.ROOT} className={button} />
//       )}
//       {showBackBtn && <IconButton icon="arrowLeft" href={href} className={button} />}
//       <Button href={href} btnType="text" className={titleButton}>
//         {name}
//       </Button>
//       {openNetMenu && (
//         <IconButton
//           icon="net"
//           onClick={openNetMenu}
//           className={button}
//           classNameIcon={eventsCount ? icon : undefined}
//         />
//       )}
//     </div>
//   );
// };
