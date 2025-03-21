import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppReady } from '@hooks/useAppReady';
import { Redirect } from '@router/redirect';
import { useStyles } from './content.styles';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  const { root, animation } = useStyles();
  const isReady = useAppReady();
  const ref = useRef<HTMLDivElement>(null);
  const { key } = useLocation();

  const handleAnimation = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '1';
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.classList.remove(animation);
    setTimeout(() => {
      el.style.opacity = '1';
      el.classList.add(animation);
    }, 0);
  }, [animation, key]);

  return (
    <div className={root} ref={ref} onAnimationEnd={handleAnimation}>
      <Redirect />
      {isReady && children}
    </div>
  );
};
