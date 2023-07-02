import React, { FC } from 'react';
import { EmailingContainer } from './emailing.styles';

const Emailing: FC = (): JSX.Element => {
  const isEnabled: boolean = false;

  if (!isEnabled) {
    return <>Please enable emailing first in your dashboard</>;
  }

  return <EmailingContainer></EmailingContainer>;
};
export default Emailing;
