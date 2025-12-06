import { FC } from 'react';
import { app } from '@app/app.provider';
import { useStyles } from './member.title.styles';

export const MemberTitle: FC = () => {
  const { root, avatar } = useStyles();
  const { member_name: memberName } = app.getState().member!.getMember();

  return (
    <div className={root}>
      <div className={avatar} />
      {memberName}
    </div>
  );
};
