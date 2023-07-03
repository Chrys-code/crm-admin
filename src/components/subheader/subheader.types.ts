import { ReactNode } from 'react';
import { Location } from 'react-router-dom';

export interface SubheaderProps {
  label: string;
  subtext: string;
  location: Location;
  children?: ReactNode;
}
export interface SubheaderContainerStyleProps {}
