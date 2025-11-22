import { FC, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';
import { NetViewEnum } from '@server/types/types';
import { MemberStatusKeys } from '@server/constants';
import { useStyles } from './member.vote.styles';

interface MemberDislikeProps {
  nodeId: number;
  memberStatus: MemberStatusKeys;
  canVote: boolean;
  vote: boolean | null;
  voteCount: number;
  netView: NetViewEnum;
}

export const MemberVote: FC<MemberDislikeProps> = (props) => {
  const { memberStatus, canVote, vote, voteCount, netView } = props;
  const { root, [memberStatus]: status } = useStyles();

  const handleClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    // !vote && app.net.memberActions.setVote(nodeId);
    // vote && app.net.memberActions.unsetVote(nodeId);
  }, []);

  if (netView === 'tree' || !canVote) return null;

  return (
    <div
      className={clsx(root, status, { vote }, { voteCount })}
      onClick={handleClick}
      aria-hidden="true"
    >
      <span>ГОЛОСІВ: {voteCount}</span>
    </div>
  );
};
