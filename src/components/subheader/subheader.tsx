import React, { FC, PropsWithChildren } from 'react';
import { SubheaderContainer, SubheaderInfoContainer } from './subheader.styles';
import { SubheaderProps } from './subheader.types';
import { generateTitleFromWindowLocation, renderActionButton } from './helper';

const Subheader: FC<SubheaderProps> = ({
  label,
  subtext,
  location,
}: PropsWithChildren<SubheaderProps>): JSX.Element => {
  const showLocation: boolean = !location.pathname.startsWith('/dashboard');

  const renderSubheaderInfo = (showLocation: boolean): JSX.Element => {
    if (showLocation) {
      return (
        <SubheaderInfoContainer>
          <h1>{generateTitleFromWindowLocation(location)}</h1>
        </SubheaderInfoContainer>
      );
    }

    return (
      <SubheaderInfoContainer>
        <h1>{label}</h1>
        <span>{subtext}</span>
      </SubheaderInfoContainer>
    );
  };

  return (
    <SubheaderContainer>
      {renderSubheaderInfo(showLocation)}
      {renderActionButton(location)}
    </SubheaderContainer>
  );
};
export default Subheader;
