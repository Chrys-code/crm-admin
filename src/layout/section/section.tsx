import React, { Children, FC, PropsWithChildren } from 'react';
import {
  SectionContainer,
  SectionDivContainer,
  SectionLabel,
} from './section.styles';
import { SectionProps } from './section.types';

const Section: FC<SectionProps> = ({
  label,
  withBorder,
  withPadding = true,
  type = 'section',
  children,
}: PropsWithChildren<SectionProps>): JSX.Element => {
  const withLabel: boolean = label !== undefined;

  const childrenCount: number = Children.count(children);
  const isMultipleChildNode: boolean = childrenCount > 1;

  if (type === 'div') {
    return (
      <SectionDivContainer
        $withBorder={withBorder}
        $withLabel={withLabel}
        $withPadding={withPadding}
        $isMultipleChildNode={isMultipleChildNode}
        type={type}
      >
        {label && <SectionLabel>{label}</SectionLabel>}
        {children}
      </SectionDivContainer>
    );
  }

  return (
    <SectionContainer
      $withBorder={withBorder}
      $withLabel={withLabel}
      $withPadding={withPadding}
      $isMultipleChildNode={isMultipleChildNode}
      type={type}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      {children}
    </SectionContainer>
  );
};
export default Section;
