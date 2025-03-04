import { useStyles } from './subject.styles';
import { Option } from '@components/controls/option/option';
import {
  ISubscription,
  SubscriptionSubjectKeys,
  SubscriptionTypeKeys,
} from '@server/types/subscription.types';
import { FC } from 'react';

interface SubjectProps {
  subject: SubscriptionSubjectKeys;
  types: Record<SubscriptionTypeKeys, boolean>;
  update: (subscription: ISubscription, checked: boolean) => void;
}

const SUBJECTS: Record<SubscriptionSubjectKeys, string> = {
  REPORT: 'Reports',
  URGENT: 'Urgent news',
};

const TYPES: Record<SubscriptionTypeKeys, string> = {
  ON_UPDATE: 'On update',
  ONE_WEEK: 'Once a week',
  TWO_WEEK: 'Once two weeks',
  ONE_MONTH: 'Once a month',
};

export const Subject: FC<SubjectProps> = (props) => {
  const { root, title } = useStyles();
  const { subject, types, update } = props;

  const optionsJsx = Object.entries(types).map(([type, checked]) => (
    <Option
      key={type}
      id={`${subject}-${type}`}
      label={TYPES[type as SubscriptionTypeKeys]}
      value={{ subject, type }}
      onChange={update}
      checked={checked}
    />
  ));

  return (
    <div className={root}>
      <div className={title}>{SUBJECTS[subject]}</div>
      {optionsJsx}
    </div>
  );
};
