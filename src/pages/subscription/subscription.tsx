import React, { FC, PropsWithChildren } from 'react';
import { SubscriptionContainer } from './subscription.styles';
import { SubscriptionProps } from './subscription.types';

const Subscription: FC<
  SubscriptionProps
> = ({}: PropsWithChildren<SubscriptionProps>): JSX.Element => {
  return (
    <SubscriptionContainer>
      <span>This is your subscription summary page</span>
      <ul>
        <li>total price</li>
      </ul>
      <ul>
        <li>list of modules and pricing</li>
      </ul>
      <ul>
        <li>add new module price</li>
      </ul>
      <ul>
        <li>payment schedule</li>
      </ul>
    </SubscriptionContainer>
  );
};
export default Subscription;
