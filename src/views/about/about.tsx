import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { useStyles } from './about.styles';

export const About: FC = () => {
  const { root } = useStyles();

  return (
    <FormContainer title="ПРО CAT & DOG">
      <div className={root}>
        <p>Цей інструмент створений для бажаючих допомагати притулку для тварин.</p>
        <p>Його функція повідомляти про стан справ та поточні потреби.</p>
      </div>
    </FormContainer>
  );
};
