import React, { FC, PropsWithChildren } from 'react';
import { SubheaderContainer, SubheaderInfoContainer } from './subheader.styles';
import { SubheaderProps } from './subheader.types';

const Subheader: FC<SubheaderProps> = ({
  label,
  subtext,
  children,
}: PropsWithChildren<SubheaderProps>): JSX.Element => {
  return (
    <SubheaderContainer>
      <SubheaderInfoContainer>
        <h1>{label}</h1>
        <span>{subtext}</span>
      </SubheaderInfoContainer>
      {children && children}
    </SubheaderContainer>
  );
};
export default Subheader;
