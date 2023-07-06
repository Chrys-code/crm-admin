import { ReactNode } from 'react';

export type SectionType = 'section' | 'div';

export interface SectionProps {
  label?: string;
  withPadding?: boolean;
  withBorder?: boolean;
  type?: SectionType;
  children: ReactNode;
}
export interface SectionContainerStyleProps {
  $withPadding?: boolean;
  $withBorder?: boolean;
  $isMultipleChildNode: boolean;
  type: SectionType;
  $withLabel: boolean;
}
