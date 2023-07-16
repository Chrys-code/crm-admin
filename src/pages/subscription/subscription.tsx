import React, { FC } from 'react';

const Subscription: FC = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};
export default Subscription;
