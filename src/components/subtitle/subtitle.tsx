import { FC } from 'react';
import { useStyles } from './subtitle.styles';

interface SubtitleProps {
  text?: string;
}

export const SubTitle: FC<SubtitleProps> = ({ text }) => {
  const { root } = useStyles();
  if (!text) return null;
  return <div className={root}>{text}</div>;
};
