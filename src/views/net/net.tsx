import { FC, useEffect } from 'react';
import { useStyles } from './net.styles';
import { useNavigateTo } from '@hooks/useNavigateTo';

export const Net: FC = () => {
  const { root, content } = useStyles();
  const navigate = useNavigateTo();

  useEffect(() => {
    navigate.to('/net/1');
  }, [navigate]);

  return (
    <div className={root}>
      <div className={content}>НЕ В СПІЛЬНОТI</div>
    </div>
  );
};
