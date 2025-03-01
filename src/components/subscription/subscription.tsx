import { useStyles } from './subscription.styles';
import { Button } from '@components/buttons/button/button';
import { Option } from '@components/controls/option/option';
import { OPTIONS, useSubscription } from './useSubscription';

export const Subscription = () => {
  const { root } = useStyles();
  const { update, remove, type } = useSubscription();

  const optionsJsx = OPTIONS.map((it) => (
    <Option
      key={it.value.type}
      id={it.value.type}
      label={it.title}
      value={it.value}
      onChange={update}
      checked={it.value.type === type}
    />
  ));

  return (
    <div className={root}>
      {optionsJsx}
      <Button type="button" btnType="telegram" onClick={remove} disabled={!type}>
        unsubscribe
      </Button>
    </div>
  );
};
